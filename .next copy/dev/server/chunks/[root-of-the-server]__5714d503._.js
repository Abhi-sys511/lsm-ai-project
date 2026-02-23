module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/sanity/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
const apiVersion = "2025-11-27";
const dataset = "production";
const projectId = "f4c8zi5a";
}),
"[project]/sanity/lib/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "writeClient",
    ()=>writeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$1_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+client@7.13.1_debug@4.4.3/node_modules/@sanity/client/dist/index.browser.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-route] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$1_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: false,
    perspective: "drafts"
});
const writeClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$1_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN
});
}),
"[project]/sanity/lib/live.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
__turbopack_context__.s([
    "SanityLive",
    ()=>SanityLive,
    "sanityFetch",
    ()=>sanityFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$11$2e$6$2e$10_$40$emotio_6b58c2b350cc127b1c80dca917ec97bd$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$live$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-sanity@11.6.10_@emotio_6b58c2b350cc127b1c80dca917ec97bd/node_modules/next-sanity/dist/live.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/client.ts [app-route] (ecmascript)");
;
;
// Token for fetching draft content (optional - set false to silence warning if not using drafts)
const token = process.env.SANITY_API_READ_TOKEN;
const { sanityFetch, SanityLive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$11$2e$6$2e$10_$40$emotio_6b58c2b350cc127b1c80dca917ec97bd$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$live$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineLive"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["client"],
    // Provide tokens for draft content support, or set to false to silence warnings
    serverToken: token || false,
    browserToken: token || false
});
}),
"[project]/lib/ai/tools/search-courses.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchCoursesTool",
    ()=>searchCoursesTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$0$2d$beta$2e$40_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+provider-utils@4.0.0-beta.40_zod@4.1.13/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/groq@4.19.0/node_modules/groq/lib/groq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/live.ts [app-route] (ecmascript)");
;
;
;
;
// Simple but effective search query - searches all courses and filters in JS for reliability
const ALL_COURSES_WITH_CONTENT_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  tier,
  "category": category->title,
  modules[]-> {
    _id,
    title,
    description,
    lessons[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      "contentText": pt::text(content)
    }
  }
}`);
const courseSearchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The topic, skill, technology, or learning goal the user wants to learn about")
});
// Helper function to check if text contains search term (case-insensitive)
function textContains(text, searchTerm) {
    if (!text) return false;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
}
// Score a course based on how well it matches the search query
function scoreCourse(course, searchTerms) {
    let score = 0;
    for (const term of searchTerms){
        // Title matches are most valuable
        if (textContains(course.title, term)) score += 100;
        // Description matches
        if (textContains(course.description, term)) score += 50;
        // Category matches
        if (textContains(course.category, term)) score += 30;
        // Module matches
        for (const module of course.modules || []){
            if (textContains(module.title, term)) score += 20;
            if (textContains(module.description, term)) score += 10;
            // Lesson matches
            for (const lesson of module.lessons || []){
                if (textContains(lesson.title, term)) score += 15;
                if (textContains(lesson.description, term)) score += 8;
                if (textContains(lesson.contentText, term)) score += 5;
            }
        }
    }
    return score;
}
const searchCoursesTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$0$2d$beta$2e$40_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
    description: "Search through all courses, modules, and lessons by topic, skill, or learning goal. This searches course titles, descriptions, module content, and lesson content to find the most relevant learning material.",
    inputSchema: courseSearchSchema,
    execute: async ({ query })=>{
        console.log("[SearchCourses] Query received:", query);
        // Fetch all courses with their full content using the same method as the rest of the app
        const { data: allCourses } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$live$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanityFetch"])({
            query: ALL_COURSES_WITH_CONTENT_QUERY
        });
        console.log("[SearchCourses] Courses fetched:", allCourses.length);
        console.log("[SearchCourses] Course titles:", allCourses.map((c)=>c.title));
        // Split query into search terms
        const searchTerms = query.toLowerCase().split(/\s+/).filter((term)=>term.length > 1);
        console.log("[SearchCourses] Search terms:", searchTerms);
        if (searchTerms.length === 0) {
            return {
                found: false,
                message: "Please provide a search term.",
                courses: []
            };
        }
        // Score and filter courses
        const scoredCourses = allCourses.map((course)=>({
                course,
                score: scoreCourse(course, searchTerms)
            })).filter(({ score })=>score > 0).sort((a, b)=>b.score - a.score).slice(0, 10);
        console.log("[SearchCourses] Scored courses:", scoredCourses.map((s)=>({
                title: s.course.title,
                score: s.score
            })));
        if (scoredCourses.length === 0) {
            return {
                found: false,
                message: "No courses, modules, or lessons found matching your query.",
                courses: []
            };
        }
        // Format the results with full content details
        const formattedCourses = scoredCourses.map(({ course })=>{
            const modules = course.modules || [];
            const moduleDetails = modules.map((module)=>{
                const lessons = module.lessons || [];
                return {
                    title: module.title,
                    description: module.description,
                    lessons: lessons.map((lesson)=>({
                            title: lesson.title,
                            slug: lesson.slug,
                            description: lesson.description,
                            // Include lesson content for the AI to answer questions from
                            // Larger preview to give AI enough context to answer questions
                            contentPreview: lesson.contentText ? lesson.contentText.slice(0, 2000) + (lesson.contentText.length > 2000 ? "..." : "") : null,
                            lessonUrl: lesson.slug ? `/lessons/${lesson.slug}` : null
                        }))
                };
            });
            return {
                id: course._id,
                title: course.title,
                slug: course.slug,
                description: course.description,
                tier: course.tier,
                category: course.category,
                url: `/courses/${course.slug}`,
                moduleCount: moduleDetails.length,
                lessonCount: moduleDetails.reduce((acc, m)=>acc + m.lessons.length, 0),
                modules: moduleDetails
            };
        });
        return {
            found: true,
            message: `Found ${scoredCourses.length} course${scoredCourses.length === 1 ? "" : "s"} with relevant content.`,
            courses: formattedCourses
        };
    }
});
}),
"[project]/lib/ai/tutor-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tutorAgent",
    ()=>tutorAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$30_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@3.0.30_zod@4.1.13/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.0-beta.128_zod@4.1.13/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$tools$2f$search$2d$courses$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/tools/search-courses.ts [app-route] (ecmascript)");
;
;
;
const tutorAgent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ToolLoopAgent"]({
    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$30_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])("gemini-2.5-flash"),
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
        searchCourses: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$tools$2f$search$2d$courses$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchCoursesTool"]
    }
});
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.0-beta.128_zod@4.1.13/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$tutor$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/tutor-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$35$2e$5_next$40$1_ef331193877ca8c73929ae559bbef26d$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.35.5_next@1_ef331193877ca8c73929ae559bbef26d/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$35$2e$5_next$40$1_ef331193877ca8c73929ae559bbef26d$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) {
        return new Response("Unauthorized", {
            status: 401
        });
    }
    // ✅ TEMP: allow ALL logged-in users
    const { messages } = await request.json();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAgentUIStreamResponse"])({
        agent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$tutor$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tutorAgent"],
        messages
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5714d503._.js.map