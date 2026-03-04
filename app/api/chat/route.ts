import { createAgentUIStreamResponse, type UIMessage } from "ai";
import { tutorAgent } from "@/lib/ai/tutor-agent";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  // ✅ TEMP: allow ALL logged-in users

  const { messages }: { messages: UIMessage[] } = await request.json();

  return createAgentUIStreamResponse({
  agent: tutorAgent as any,
  uiMessages: messages,
  });
}
