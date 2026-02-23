"use server";

import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { client } from "@/sanity/lib/client";
import { LESSON_BY_ID_QUERY } from "@/sanity/lib/queries";
import { toPlainText } from "@portabletext/react";

export async function summarizeVideo(lessonId: string) {
    try {
        // 1. Fetch lesson data from Sanity
        const lesson = await client.fetch(LESSON_BY_ID_QUERY, { id: lessonId });

        if (!lesson) {
            throw new Error("Lesson not found");
        }

        // 2. Prepare context for AI
        const lessonTitle = lesson.title || "Untitled Lesson";
        const lessonDescription = lesson.description || "";
        const lessonContent = lesson.content ? toPlainText(lesson.content) : "";

        // 3. Try to fetch audio stream from Mux
        let audioData: Uint8Array | undefined;
        let transcript = "";
        const playbackId = lesson.video?.asset?.playbackId;

        if (playbackId) {
            try {
                // Fetch the M4A audio stream from Mux directly
                const audioResponse = await fetch(
                    `https://stream.mux.com/${playbackId}/audio.m4a`,
                );
                if (audioResponse.ok) {
                    const arrayBuffer = await audioResponse.arrayBuffer();
                    audioData = new Uint8Array(arrayBuffer);
                } else {
                    console.warn(
                        "Failed to fetch audio stream from Mux, status:",
                        audioResponse.status,
                    );
                }
            } catch (e) {
                console.warn("Failed to fetch audio from Mux:", e);
            }
        }

        // 4. Prepare messages for Gemini
        const systemPrompt =
            "You are an expert educational assistant at Ai Academy. Your goal is to provide a concise, structured, and helpful summary of a lesson based on its context and the actual video audio. Use Markdown for formatting.";

        const promptText = `Summarize the following lesson for a student. Priority should be given to the video audio if available.
        
Lesson Title: ${lessonTitle}
Description: ${lessonDescription}
Rich Text Content: ${lessonContent}

Ensure the summary is easy to read, structured with headings, and focused on learning outcomes.`;

        // If we successfully fetched the audio, attach it to the prompt
        let finalPrompt = promptText;
        if (!audioData) {
            // Fallback instruction if audio fetch failed
            finalPrompt += "\n\nNo audio track available. Please use the content above.";
        }

        const modelOpts = google("gemini-2.5-flash");

        // 5. Generate summary using Gemini
        const { text: summary } = await generateText(
            audioData
                ? {
                    model: modelOpts as any,
                    system: systemPrompt,
                    messages: [
                        {
                            role: "user",
                            content: [
                                { type: "text", text: finalPrompt },
                                {
                                    type: "file",
                                    data: Buffer.from(audioData).toString("base64"),
                                    mediaType: "audio/m4a",
                                },
                            ],
                        },
                    ],
                }
                : {
                    model: modelOpts as any,
                    system: systemPrompt,
                    prompt: finalPrompt,
                }
        );

        return {
            success: true,
            summary,
        };
    } catch (error) {
        console.error("Summarization error:", error);
        return {
            success: false,
            error:
                error instanceof Error ? error.message : "Failed to generate summary",
        };
    }
}
