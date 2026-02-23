import { google } from "@ai-sdk/google";
import { ToolLoopAgent } from "ai";
import { searchCoursesTool } from "./tools/search-courses";

export const tutorAgent = new ToolLoopAgent({
  model: google("gemini-2.5-flash"),
  instructions: `
You are a helpful AI tutor for Ai Academy.

You help students by:
- Searching courses
- Answering using lesson content only
- Recommending lessons

If no content found:
Say you couldn't find it in our catalog.

Never make up answers.
Be friendly and educational.
`,
  tools: {
    searchCourses: searchCoursesTool,
  },
});
