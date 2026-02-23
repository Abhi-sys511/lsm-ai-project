"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";

interface FloatingChatWidgetProps {
  lessonTitle?: string;
}

export function FloatingChatWidget({ lessonTitle }: FloatingChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [activeQuestion, setActiveQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;

    const userQuestion = question;
    setQuestion("");
    setActiveQuestion(userQuestion);
    setLoading(true);
    setResponse(""); // Clear previous response when new question is asked

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              id: Date.now().toString(),
              role: "user",
              parts: [
                {
                  type: "text",
                  text:
                    userQuestion +
                    (lessonTitle ? ` (Current lesson: ${lessonTitle})` : ""),
                },
              ],
            },
          ],
        }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullResponse = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.replace("data: ", "").trim();
            if (!dataStr || dataStr === "[DONE]") continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.type === "text-delta" && data.delta) {
                fullResponse += data.delta;
                setResponse(fullResponse);
              }
            } catch (e) {
              // Ignored partial parse error
            }
          }
        }
      }
    } catch (error) {
      setResponse("An error occurred reaching the AI Tutor.");
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">
                  AI Academy Assistant
                </h3>
                <p className="text-xs text-zinc-400 truncate w-48">
                  {lessonTitle
                    ? `Current Lesson: ${lessonTitle}`
                    : "How can I help you learn today?"}
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!activeQuestion && !response ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 space-y-2">
                <Bot className="w-10 h-10 opacity-20" />
                <p className="text-sm">
                  Hi! I'm your AI learning assistant.
                  <br /> Ask me anything about our courses or technical topics!
                </p>
              </div>
            ) : (
              <>
                {/* User Question */}
                {activeQuestion && (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm bg-violet-600 text-white rounded-br-sm">
                      <div className="whitespace-pre-wrap leading-relaxed">
                        {activeQuestion}
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Response or Loading */}
                {(response || loading) && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm bg-zinc-800 text-zinc-200 rounded-bl-sm">
                      {loading && !response ? (
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Thinking...</span>
                        </div>
                      ) : (
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {response}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900/50 border-t border-zinc-800">
            <form onSubmit={handleAskAI} className="flex gap-2">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Message AI Tutor..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-700 transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 ${
          isOpen
            ? "bg-zinc-800 text-white hover:bg-zinc-700"
            : "bg-violet-600 text-white hover:bg-violet-700 shadow-violet-500/25"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
