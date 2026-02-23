(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/actions/data:a45f49 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ae8cc7178bc677da65bf6e5429b3233c2b8dfab1":"getMuxSignedTokens"},"lib/actions/mux.ts",""] */ __turbopack_context__.s([
    "getMuxSignedTokens",
    ()=>getMuxSignedTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getMuxSignedTokens = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ae8cc7178bc677da65bf6e5429b3233c2b8dfab1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getMuxSignedTokens"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbXV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IE11eCBmcm9tIFwiQG11eC9tdXgtbm9kZVwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgZm9ybWF0U2lnbmluZ0tleSB9IGZyb20gXCJAL2xpYi9tdXhcIjtcclxuaW1wb3J0IHsgd3JpdGVDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHkvbGliL2NsaWVudFwiO1xyXG5cclxuY29uc3QgbXV4ID0gbmV3IE11eCh7XHJcbiAgdG9rZW5JZDogcHJvY2Vzcy5lbnYuTVVYX1RPS0VOX0lELFxyXG4gIHRva2VuU2VjcmV0OiBwcm9jZXNzLmVudi5NVVhfVE9LRU5fU0VDUkVULFxyXG59KTtcclxuXHJcbmludGVyZmFjZSBDcmVhdGVVcGxvYWRSZXN1bHQge1xyXG4gIHVwbG9hZFVybDogc3RyaW5nIHwgbnVsbDtcclxuICB1cGxvYWRJZDogc3RyaW5nIHwgbnVsbDtcclxuICBlcnJvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU11eFVwbG9hZFVybCgpOiBQcm9taXNlPENyZWF0ZVVwbG9hZFJlc3VsdD4ge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuTVVYX1RPS0VOX0lEIHx8ICFwcm9jZXNzLmVudi5NVVhfVE9LRU5fU0VDUkVUKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cGxvYWRVcmw6IG51bGwsXHJcbiAgICAgIHVwbG9hZElkOiBudWxsLFxyXG4gICAgICBlcnJvcjogXCJNdXggQVBJIGNyZWRlbnRpYWxzIGFyZSBub3QgY29uZmlndXJlZFwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGxvYWQgPSBhd2FpdCBtdXgudmlkZW8udXBsb2Fkcy5jcmVhdGUoe1xyXG4gICAgICBjb3JzX29yaWdpbjogXCIqXCIsXHJcbiAgICAgIG5ld19hc3NldF9zZXR0aW5nczoge1xyXG4gICAgICAgIHBsYXliYWNrX3BvbGljeTogW1wic2lnbmVkXCJdLFxyXG4gICAgICAgIHZpZGVvX3F1YWxpdHk6IFwicGx1c1wiLFxyXG4gICAgICAgIGlucHV0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZWRfc3VidGl0bGVzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VfY29kZTogXCJlblwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJFbmdsaXNoIENDXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwbG9hZFVybDogdXBsb2FkLnVybCxcclxuICAgICAgdXBsb2FkSWQ6IHVwbG9hZC5pZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XHJcbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gY3JlYXRlIHVwbG9hZCBVUkxcIjtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKFwiTXV4IHVwbG9hZCBVUkwgY3JlYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHVwbG9hZFVybDogbnVsbCwgdXBsb2FkSWQ6IG51bGwsIGVycm9yOiBlcnJvck1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBNdXhBc3NldFN0YXR1cyB7XHJcbiAgc3RhdHVzOiBcIndhaXRpbmdcIiB8IFwicHJlcGFyaW5nXCIgfCBcInJlYWR5XCIgfCBcImVycm9yZWRcIiB8IG51bGw7XHJcbiAgcGxheWJhY2tJZDogc3RyaW5nIHwgbnVsbDtcclxuICBhc3NldElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHNhbml0eUFzc2V0SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNdXhVcGxvYWRTdGF0dXMoXHJcbiAgdXBsb2FkSWQ6IHN0cmluZyxcclxuKTogUHJvbWlzZTxNdXhBc3NldFN0YXR1cz4ge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuTVVYX1RPS0VOX0lEIHx8ICFwcm9jZXNzLmVudi5NVVhfVE9LRU5fU0VDUkVUKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXM6IG51bGwsXHJcbiAgICAgIHBsYXliYWNrSWQ6IG51bGwsXHJcbiAgICAgIGFzc2V0SWQ6IG51bGwsXHJcbiAgICAgIHNhbml0eUFzc2V0SWQ6IG51bGwsXHJcbiAgICAgIGVycm9yOiBcIk11eCBBUEkgY3JlZGVudGlhbHMgYXJlIG5vdCBjb25maWd1cmVkXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwbG9hZCA9IGF3YWl0IG11eC52aWRlby51cGxvYWRzLnJldHJpZXZlKHVwbG9hZElkKTtcclxuXHJcbiAgICBpZiAodXBsb2FkLmFzc2V0X2lkKSB7XHJcbiAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgbXV4LnZpZGVvLmFzc2V0cy5yZXRyaWV2ZSh1cGxvYWQuYXNzZXRfaWQpO1xyXG4gICAgICBjb25zdCBzaWduZWRQbGF5YmFjayA9IGFzc2V0LnBsYXliYWNrX2lkcz8uZmluZChcclxuICAgICAgICAocCkgPT4gcC5wb2xpY3kgPT09IFwic2lnbmVkXCIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBJZiBhc3NldCBpcyByZWFkeSwgY3JlYXRlL3VwZGF0ZSB0aGUgU2FuaXR5IG11eC52aWRlb0Fzc2V0IGRvY3VtZW50XHJcbiAgICAgIGlmIChhc3NldC5zdGF0dXMgPT09IFwicmVhZHlcIiAmJiBzaWduZWRQbGF5YmFjaykge1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgVVVJRCBmb3IgdGhlIFNhbml0eSBkb2N1bWVudCAobWF0Y2hpbmcgcGx1Z2luIGZvcm1hdClcclxuICAgICAgICBjb25zdCBzYW5pdHlBc3NldElkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtdXgudmlkZW9Bc3NldCBkb2N1bWVudCBpbiBTYW5pdHlcclxuICAgICAgICAvLyBTdHJ1Y3R1cmUgbWF0Y2hlcyB3aGF0IHNhbml0eS1wbHVnaW4tbXV4LWlucHV0IGNyZWF0ZXNcclxuICAgICAgICBhd2FpdCB3cml0ZUNsaWVudC5jcmVhdGVPclJlcGxhY2Uoe1xyXG4gICAgICAgICAgX2lkOiBzYW5pdHlBc3NldElkLFxyXG4gICAgICAgICAgX3R5cGU6IFwibXV4LnZpZGVvQXNzZXRcIixcclxuICAgICAgICAgIHN0YXR1czogYXNzZXQuc3RhdHVzLFxyXG4gICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXHJcbiAgICAgICAgICBwbGF5YmFja0lkOiBzaWduZWRQbGF5YmFjay5pZCxcclxuICAgICAgICAgIHVwbG9hZElkOiBhc3NldC51cGxvYWRfaWQsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGFzcGVjdF9yYXRpbzogYXNzZXQuYXNwZWN0X3JhdGlvLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBhc3NldC5jcmVhdGVkX2F0LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogYXNzZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGVuY29kaW5nX3RpZXI6IGFzc2V0LmVuY29kaW5nX3RpZXIsXHJcbiAgICAgICAgICAgIGlkOiBhc3NldC5pZCxcclxuICAgICAgICAgICAgaW5nZXN0X3R5cGU6IGFzc2V0LmluZ2VzdF90eXBlLFxyXG4gICAgICAgICAgICBtYXN0ZXJfYWNjZXNzOiBhc3NldC5tYXN0ZXJfYWNjZXNzLFxyXG4gICAgICAgICAgICBtYXhfcmVzb2x1dGlvbl90aWVyOiBhc3NldC5tYXhfcmVzb2x1dGlvbl90aWVyLFxyXG4gICAgICAgICAgICBtYXhfc3RvcmVkX2ZyYW1lX3JhdGU6IGFzc2V0Lm1heF9zdG9yZWRfZnJhbWVfcmF0ZSxcclxuICAgICAgICAgICAgbWF4X3N0b3JlZF9yZXNvbHV0aW9uOiBhc3NldC5tYXhfc3RvcmVkX3Jlc29sdXRpb24sXHJcbiAgICAgICAgICAgIG1wNF9zdXBwb3J0OiBhc3NldC5tcDRfc3VwcG9ydCxcclxuICAgICAgICAgICAgcGFzc3Rocm91Z2g6IHNhbml0eUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHBsYXliYWNrX2lkczogYXNzZXQucGxheWJhY2tfaWRzPy5tYXAoKHApID0+ICh7XHJcbiAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgcG9saWN5OiBwLnBvbGljeSxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uX3RpZXI6IGFzc2V0LnJlc29sdXRpb25fdGllcixcclxuICAgICAgICAgICAgc3RhdHVzOiBhc3NldC5zdGF0dXMsXHJcbiAgICAgICAgICAgIHRyYWNrczogYXNzZXQudHJhY2tzLFxyXG4gICAgICAgICAgICB1cGxvYWRfaWQ6IGFzc2V0LnVwbG9hZF9pZCxcclxuICAgICAgICAgICAgdmlkZW9fcXVhbGl0eTogYXNzZXQudmlkZW9fcXVhbGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdGF0dXM6IGFzc2V0LnN0YXR1cyBhcyBNdXhBc3NldFN0YXR1c1tcInN0YXR1c1wiXSxcclxuICAgICAgICAgIHBsYXliYWNrSWQ6IHNpZ25lZFBsYXliYWNrLmlkLFxyXG4gICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXHJcbiAgICAgICAgICBzYW5pdHlBc3NldElkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzOiBhc3NldC5zdGF0dXMgYXMgTXV4QXNzZXRTdGF0dXNbXCJzdGF0dXNcIl0sXHJcbiAgICAgICAgcGxheWJhY2tJZDogc2lnbmVkUGxheWJhY2s/LmlkID8/IG51bGwsXHJcbiAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXHJcbiAgICAgICAgc2FuaXR5QXNzZXRJZDogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXM6IFwid2FpdGluZ1wiLFxyXG4gICAgICBwbGF5YmFja0lkOiBudWxsLFxyXG4gICAgICBhc3NldElkOiBudWxsLFxyXG4gICAgICBzYW5pdHlBc3NldElkOiBudWxsLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cclxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBnZXQgdXBsb2FkIHN0YXR1c1wiO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgcGxheWJhY2tJZDogbnVsbCxcclxuICAgICAgYXNzZXRJZDogbnVsbCxcclxuICAgICAgc2FuaXR5QXNzZXRJZDogbnVsbCxcclxuICAgICAgZXJyb3I6IGVycm9yTWVzc2FnZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTXV4VG9rZW5zUmVzdWx0IHtcclxuICBwbGF5YmFja1Rva2VuOiBzdHJpbmcgfCBudWxsO1xyXG4gIHRodW1ibmFpbFRva2VuOiBzdHJpbmcgfCBudWxsO1xyXG4gIHN0b3J5Ym9hcmRUb2tlbjogc3RyaW5nIHwgbnVsbDtcclxuICBlcnJvcj86IHN0cmluZztcclxuICBkZWJ1Zz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11eFNpZ25lZFRva2VucyhcclxuICBwbGF5YmFja0lkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4pOiBQcm9taXNlPE11eFRva2Vuc1Jlc3VsdD4ge1xyXG4gIGNvbnN0IHNpZ25pbmdLZXkgPSBwcm9jZXNzLmVudi5NVVhfU0lHTklOR19LRVk7XHJcbiAgY29uc3Qgc2lnbmluZ0tleUlkID0gcHJvY2Vzcy5lbnYuTVVYX1NJR05JTkdfS0VZX0lEO1xyXG5cclxuICBpZiAoIXNpZ25pbmdLZXkgfHwgIXNpZ25pbmdLZXlJZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGxheWJhY2tUb2tlbjogbnVsbCxcclxuICAgICAgdGh1bWJuYWlsVG9rZW46IG51bGwsXHJcbiAgICAgIHN0b3J5Ym9hcmRUb2tlbjogbnVsbCxcclxuICAgICAgZXJyb3I6IFwiTXV4IHNpZ25pbmcga2V5cyBhcmUgbm90IGNvbmZpZ3VyZWRcIixcclxuICAgICAgZGVidWc6XHJcbiAgICAgICAgYE1pc3Npbmc6ICR7IXNpZ25pbmdLZXkgPyBcIk1VWF9TSUdOSU5HX0tFWVwiIDogXCJcIn0gJHshc2lnbmluZ0tleUlkID8gXCJNVVhfU0lHTklOR19LRVlfSURcIiA6IFwiXCJ9YC50cmltKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwbGF5YmFja0lkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwbGF5YmFja1Rva2VuOiBudWxsLFxyXG4gICAgICB0aHVtYm5haWxUb2tlbjogbnVsbCxcclxuICAgICAgc3Rvcnlib2FyZFRva2VuOiBudWxsLFxyXG4gICAgICBlcnJvcjogXCJwbGF5YmFja0lkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgKyAzNjAwOyAvLyAxIGhvdXIgZnJvbSBub3dcclxuICAgIGNvbnN0IGZvcm1hdHRlZEtleSA9IGZvcm1hdFNpZ25pbmdLZXkoc2lnbmluZ0tleSk7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgcGxheWJhY2sgdG9rZW4gKGF1ZDogXCJ2XCIpXHJcbiAgICBjb25zdCBwbGF5YmFja1Rva2VuID0gand0LnNpZ24oXHJcbiAgICAgIHsgc3ViOiBwbGF5YmFja0lkLCBleHA6IGV4cGlyYXRpb25UaW1lLCBraWQ6IHNpZ25pbmdLZXlJZCwgYXVkOiBcInZcIiB9LFxyXG4gICAgICBmb3JtYXR0ZWRLZXksXHJcbiAgICAgIHsgYWxnb3JpdGhtOiBcIlJTMjU2XCIgfSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgdGh1bWJuYWlsIHRva2VuIChhdWQ6IFwidFwiKVxyXG4gICAgY29uc3QgdGh1bWJuYWlsVG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgeyBzdWI6IHBsYXliYWNrSWQsIGV4cDogZXhwaXJhdGlvblRpbWUsIGtpZDogc2lnbmluZ0tleUlkLCBhdWQ6IFwidFwiIH0sXHJcbiAgICAgIGZvcm1hdHRlZEtleSxcclxuICAgICAgeyBhbGdvcml0aG06IFwiUlMyNTZcIiB9LFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBzdG9yeWJvYXJkIHRva2VuIChhdWQ6IFwic1wiKVxyXG4gICAgY29uc3Qgc3Rvcnlib2FyZFRva2VuID0gand0LnNpZ24oXHJcbiAgICAgIHsgc3ViOiBwbGF5YmFja0lkLCBleHA6IGV4cGlyYXRpb25UaW1lLCBraWQ6IHNpZ25pbmdLZXlJZCwgYXVkOiBcInNcIiB9LFxyXG4gICAgICBmb3JtYXR0ZWRLZXksXHJcbiAgICAgIHsgYWxnb3JpdGhtOiBcIlJTMjU2XCIgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHsgcGxheWJhY2tUb2tlbiwgdGh1bWJuYWlsVG9rZW4sIHN0b3J5Ym9hcmRUb2tlbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXHJcbiAgICAgICAgPyBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBzaWduZWQgdG9rZW5zXCI7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGxheWJhY2tUb2tlbjogbnVsbCxcclxuICAgICAgdGh1bWJuYWlsVG9rZW46IG51bGwsXHJcbiAgICAgIHN0b3J5Ym9hcmRUb2tlbjogbnVsbCxcclxuICAgICAgZXJyb3I6IGVycm9yTWVzc2FnZSxcclxuICAgICAgZGVidWc6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5zdGFjayA6IFN0cmluZyhlcnJvciksXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGVnYWN5IGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXV4U2lnbmVkVG9rZW4oXHJcbiAgcGxheWJhY2tJZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuKTogUHJvbWlzZTx7IHRva2VuOiBzdHJpbmcgfCBudWxsOyBlcnJvcj86IHN0cmluZzsgZGVidWc/OiBzdHJpbmcgfT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE11eFNpZ25lZFRva2VucyhwbGF5YmFja0lkKTtcclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHJlc3VsdC5wbGF5YmFja1Rva2VuLFxyXG4gICAgZXJyb3I6IHJlc3VsdC5lcnJvcixcclxuICAgIGRlYnVnOiByZXN1bHQuZGVidWcsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQTRLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lessons/MuxVideoPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuxVideoPlayer",
    ()=>MuxVideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mux$2b$mux$2d$player$2d$react$40$3$2e$11$2e$_cb1d87a1a174cb547d3b0e6bfd4a5c7a$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mux+mux-player-react@3.11._cb1d87a1a174cb547d3b0e6bfd4a5c7a/node_modules/@mux/mux-player-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a45f49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:a45f49 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MuxVideoPlayer({ playbackId, title, className }) {
    _s();
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MuxVideoPlayer.useEffect": ()=>{
            if (!playbackId) {
                setIsLoading(false);
                return;
            }
            async function fetchTokens() {
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a45f49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMuxSignedTokens"])(playbackId);
                    if (result.playbackToken && result.thumbnailToken && result.storyboardToken) {
                        setTokens({
                            playback: result.playbackToken,
                            thumbnail: result.thumbnailToken,
                            storyboard: result.storyboardToken
                        });
                    }
                } catch  {
                // Silently handle errors - tokens will be null and player may fallback
                } finally{
                    setIsLoading(false);
                }
            }
            fetchTokens();
        }
    }["MuxVideoPlayer.useEffect"], [
        playbackId
    ]);
    if (!playbackId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `aspect-video bg-zinc-900 rounded-xl flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                        className: "w-12 h-12 text-zinc-600 mx-auto mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-500",
                        children: "No video available"
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `aspect-video bg-zinc-900 rounded-xl flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                        className: "w-12 h-12 text-zinc-600 mx-auto mb-3 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-500",
                        children: "Loading video..."
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mux$2b$mux$2d$player$2d$react$40$3$2e$11$2e$_cb1d87a1a174cb547d3b0e6bfd4a5c7a$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            playbackId: playbackId,
            tokens: tokens ?? undefined,
            metadata: {
                video_title: title ?? "Lesson video"
            },
            streamType: "on-demand",
            autoPlay: false,
            className: "w-full aspect-video rounded-xl overflow-hidden",
            accentColor: "#8b5cf6",
            onError: ()=>{
            // Error handling - player will show its own error UI
            }
        }, void 0, false, {
            fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lessons/MuxVideoPlayer.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s(MuxVideoPlayer, "NF+LW8CRseIYNjo2Zqevdxam6dw=");
_c = MuxVideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "MuxVideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/lib/image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$image$2d$url$40$1$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+image-url@1.2.0/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
;
;
// https://www.sanity.io/docs/image-url
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$image$2d$url$40$1$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"]
});
const urlFor = (source)=>{
    return builder.image(source);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lessons/LessonContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonContent",
    ()=>LessonContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$react$40$6$2e$0$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@portabletext+react@6.0.2_react@19.2.0/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
;
const components = {
    block: {
        h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mt-8 mb-4 text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 10,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mt-6 mb-3 text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mt-5 mb-2 text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        h4: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold mt-4 mb-2 text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        normal: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-300 leading-relaxed mb-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        blockquote: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "border-l-4 border-violet-500 pl-4 my-4 italic text-zinc-400",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
    },
    list: {
        bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside space-y-2 mb-4 text-zinc-300",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "list-decimal list-inside space-y-2 mb-4 text-zinc-300",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
    },
    listItem: {
        bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "ml-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "ml-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
    },
    marks: {
        strong: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 52,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        em: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "italic",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 55,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        code: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-violet-300 font-mono",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
        link: ({ children, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: value?.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
    },
    types: {
        image: ({ value })=>{
            if (!value?.asset) {
                return null;
            }
            const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(value).width(1200).auto("format").url();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "my-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageUrl,
                            alt: value.alt || "Lesson image",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/lessons/LessonContent.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/LessonContent.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    value.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        className: "text-sm text-zinc-400 mt-2 text-center italic",
                        children: value.caption
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/LessonContent.tsx",
                        lineNumber: 80,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 76,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
};
function LessonContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "b84427622e4e82acef6c960d0b3f1b1e9a3c17c7a9e0a29db2ebd3cd3ab64bae") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84427622e4e82acef6c960d0b3f1b1e9a3c17c7a9e0a29db2ebd3cd3ab64bae";
    }
    const { content, title } = t0;
    if (!content || content.length === 0) {
        const t1 = title || "this lesson";
        let t2;
        if ($[1] !== t1) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mt-6 mb-3 text-white",
                children: [
                    "Session 1: Basics of ",
                    t1
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 107,
                columnNumber: 12
            }, this);
            $[1] = t1;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        const t3 = title || "the topic";
        let t4;
        if ($[3] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-300 leading-relaxed mb-4",
                children: [
                    "Welcome to this lesson! In this session, we will cover the foundational concepts and the basics of ",
                    t3,
                    ". Please refer to the video for a detailed walkthrough."
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 116,
                columnNumber: 12
            }, this);
            $[3] = t3;
            $[4] = t4;
        } else {
            t4 = $[4];
        }
        const t5 = title || "this lesson";
        let t6;
        if ($[5] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mt-6 mb-3 text-white",
                children: [
                    "Session 2: Deep Dive into ",
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 125,
                columnNumber: 12
            }, this);
            $[5] = t5;
            $[6] = t6;
        } else {
            t6 = $[6];
        }
        let t7;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-300 leading-relaxed mb-4",
                children: "Now that you understand the basics, let's explore more advanced topics and practical applications of this theory."
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 133,
                columnNumber: 12
            }, this);
            $[7] = t7;
        } else {
            t7 = $[7];
        }
        let t8;
        if ($[8] !== t2 || $[9] !== t4 || $[10] !== t6) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-invert max-w-none mt-8",
                children: [
                    t2,
                    t4,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 140,
                columnNumber: 12
            }, this);
            $[8] = t2;
            $[9] = t4;
            $[10] = t6;
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        return t8;
    }
    let t1;
    if ($[12] !== content) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose prose-invert max-w-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$react$40$6$2e$0$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                value: content,
                components: components
            }, void 0, false, {
                fileName: "[project]/components/lessons/LessonContent.tsx",
                lineNumber: 152,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonContent.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[12] = content;
        $[13] = t1;
    } else {
        t1 = $[13];
    }
    return t1;
}
_c = LessonContent;
var _c;
__turbopack_context__.k.register(_c, "LessonContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "c8e7a4c79d5601039964478c33008d2e8b019553a06696131059b764be57a528") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8e7a4c79d5601039964478c33008d2e8b019553a06696131059b764be57a528";
    }
    let className;
    let props;
    let size;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, size, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        variant = $[6];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== Comp || $[12] !== props || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/button.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:227d09 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4084c25158262fadd45279e013b5fd3001dd88113e":"summarizeVideo"},"lib/actions/summarize.ts",""] */ __turbopack_context__.s([
    "summarizeVideo",
    ()=>summarizeVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var summarizeVideo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4084c25158262fadd45279e013b5fd3001dd88113e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "summarizeVideo"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VtbWFyaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXh0IH0gZnJvbSBcImFpXCI7XHJcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gXCJAYWktc2RrL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiQC9zYW5pdHkvbGliL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBMRVNTT05fQllfSURfUVVFUlkgfSBmcm9tIFwiQC9zYW5pdHkvbGliL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgdG9QbGFpblRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZVZpZGVvKGxlc3NvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gMS4gRmV0Y2ggbGVzc29uIGRhdGEgZnJvbSBTYW5pdHlcclxuICAgICAgICBjb25zdCBsZXNzb24gPSBhd2FpdCBjbGllbnQuZmV0Y2goTEVTU09OX0JZX0lEX1FVRVJZLCB7IGlkOiBsZXNzb25JZCB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFsZXNzb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGVzc29uIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIFByZXBhcmUgY29udGV4dCBmb3IgQUlcclxuICAgICAgICBjb25zdCBsZXNzb25UaXRsZSA9IGxlc3Nvbi50aXRsZSB8fCBcIlVudGl0bGVkIExlc3NvblwiO1xyXG4gICAgICAgIGNvbnN0IGxlc3NvbkRlc2NyaXB0aW9uID0gbGVzc29uLmRlc2NyaXB0aW9uIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbGVzc29uQ29udGVudCA9IGxlc3Nvbi5jb250ZW50ID8gdG9QbGFpblRleHQobGVzc29uLmNvbnRlbnQpIDogXCJcIjtcclxuXHJcbiAgICAgICAgLy8gMy4gVHJ5IHRvIGZldGNoIGF1ZGlvIHN0cmVhbSBmcm9tIE11eFxyXG4gICAgICAgIGxldCBhdWRpb0RhdGE6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHBsYXliYWNrSWQgPSBsZXNzb24udmlkZW8/LmFzc2V0Py5wbGF5YmFja0lkO1xyXG5cclxuICAgICAgICBpZiAocGxheWJhY2tJZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIE00QSBhdWRpbyBzdHJlYW0gZnJvbSBNdXggZGlyZWN0bHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9zdHJlYW0ubXV4LmNvbS8ke3BsYXliYWNrSWR9L2F1ZGlvLm00YWAsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGF1ZGlvUmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0RhdGEgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWlsZWQgdG8gZmV0Y2ggYXVkaW8gc3RyZWFtIGZyb20gTXV4LCBzdGF0dXM6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvUmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBmZXRjaCBhdWRpbyBmcm9tIE11eDpcIiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIFByZXBhcmUgbWVzc2FnZXMgZm9yIEdlbWluaVxyXG4gICAgICAgIGNvbnN0IHN5c3RlbVByb21wdCA9XHJcbiAgICAgICAgICAgIFwiWW91IGFyZSBhbiBleHBlcnQgZWR1Y2F0aW9uYWwgYXNzaXN0YW50IGF0IEFpIEFjYWRlbXkuIFlvdXIgZ29hbCBpcyB0byBwcm92aWRlIGEgY29uY2lzZSwgc3RydWN0dXJlZCwgYW5kIGhlbHBmdWwgc3VtbWFyeSBvZiBhIGxlc3NvbiBiYXNlZCBvbiBpdHMgY29udGV4dCBhbmQgdGhlIGFjdHVhbCB2aWRlbyBhdWRpby4gVXNlIE1hcmtkb3duIGZvciBmb3JtYXR0aW5nLlwiO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9tcHRUZXh0ID0gYFN1bW1hcml6ZSB0aGUgZm9sbG93aW5nIGxlc3NvbiBmb3IgYSBzdHVkZW50LiBQcmlvcml0eSBzaG91bGQgYmUgZ2l2ZW4gdG8gdGhlIHZpZGVvIGF1ZGlvIGlmIGF2YWlsYWJsZS5cclxuICAgICAgICBcclxuTGVzc29uIFRpdGxlOiAke2xlc3NvblRpdGxlfVxyXG5EZXNjcmlwdGlvbjogJHtsZXNzb25EZXNjcmlwdGlvbn1cclxuUmljaCBUZXh0IENvbnRlbnQ6ICR7bGVzc29uQ29udGVudH1cclxuXHJcbkVuc3VyZSB0aGUgc3VtbWFyeSBpcyBlYXN5IHRvIHJlYWQsIHN0cnVjdHVyZWQgd2l0aCBoZWFkaW5ncywgYW5kIGZvY3VzZWQgb24gbGVhcm5pbmcgb3V0Y29tZXMuYDtcclxuXHJcbiAgICAgICAgLy8gSWYgd2Ugc3VjY2Vzc2Z1bGx5IGZldGNoZWQgdGhlIGF1ZGlvLCBhdHRhY2ggaXQgdG8gdGhlIHByb21wdFxyXG4gICAgICAgIGxldCBmaW5hbFByb21wdCA9IHByb21wdFRleHQ7XHJcbiAgICAgICAgaWYgKCFhdWRpb0RhdGEpIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgaW5zdHJ1Y3Rpb24gaWYgYXVkaW8gZmV0Y2ggZmFpbGVkXHJcbiAgICAgICAgICAgIGZpbmFsUHJvbXB0ICs9IFwiXFxuXFxuTm8gYXVkaW8gdHJhY2sgYXZhaWxhYmxlLiBQbGVhc2UgdXNlIHRoZSBjb250ZW50IGFib3ZlLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9kZWxPcHRzID0gZ29vZ2xlKFwiZ2VtaW5pLTIuNS1mbGFzaFwiKTtcclxuXHJcbiAgICAgICAgLy8gNS4gR2VuZXJhdGUgc3VtbWFyeSB1c2luZyBHZW1pbmlcclxuICAgICAgICBjb25zdCB7IHRleHQ6IHN1bW1hcnkgfSA9IGF3YWl0IGdlbmVyYXRlVGV4dChcclxuICAgICAgICAgICAgYXVkaW9EYXRhXHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWxPcHRzIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW06IHN5c3RlbVByb21wdCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiLCB0ZXh0OiBmaW5hbFByb21wdCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEJ1ZmZlci5mcm9tKGF1ZGlvRGF0YSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVHlwZTogXCJhdWRpby9tNGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IG1vZGVsT3B0cyBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtOiBzeXN0ZW1Qcm9tcHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiBmaW5hbFByb21wdCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTdW1tYXJpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBzdW1tYXJ5XCIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lessons/VideoSummarizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoSummarizer",
    ()=>VideoSummarizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$227d09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:227d09 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.7_react@19.2.0/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jspdf$40$4$2e$2$2e$0$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jspdf@4.2.0/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function VideoSummarizer({ lessonId, lessonTitle }) {
    _s();
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSummarize = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$227d09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["summarizeVideo"])(lessonId);
            if (result.success && result.summary) {
                setSummary(result.summary);
            } else {
                setError(result.error || "Failed to generate summary");
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally{
            setLoading(false);
        }
    };
    const downloadPDF = ()=>{
        if (!summary) return;
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jspdf$40$4$2e$2$2e$0$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
        const margin = 10;
        const pageWidth = doc.internal.pageSize.getWidth();
        const maxLineLength = pageWidth - margin * 2;
        // Add Title
        doc.setFontSize(18);
        doc.text(`Lesson Summary: ${lessonTitle}`, margin, 20);
        // Add Content
        doc.setFontSize(12);
        // Simple text split - jsPDF doesn't render markdown, so we strip some basic md or just print it literal
        // Better: split by lines and handle page breaks
        const cleanText = summary.replace(/[#*`]/g, ""); // Basic cleanup
        const lines = doc.splitTextToSize(cleanText, maxLineLength);
        doc.text(lines, margin, 35);
        doc.save(`${lessonTitle.replace(/\s+/g, "_")}_Summary.pdf`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: !summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white mb-2",
                        children: "Video Summarizer"
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 max-w-sm mb-6",
                        children: "Get an instant AI-powered summary of this lesson's key points and takeaways."
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSummarize,
                        disabled: loading,
                        className: "bg-violet-600 hover:bg-violet-700 text-white gap-2 px-8",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, this),
                                "Summarizing..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, this),
                                "Summarize Video"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 mt-4 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 78,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                lineNumber: 58,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-zinc-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-violet-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg",
                                        children: "Lesson Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: downloadPDF,
                                className: "border-zinc-700 hover:bg-zinc-800 text-zinc-300 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    "Download PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                            children: summary
                        }, void 0, false, {
                            fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: ()=>setSummary(null),
                            className: "text-zinc-500 hover:text-zinc-300",
                            children: "Clear and summarize again"
                        }, void 0, false, {
                            fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lessons/VideoSummarizer.tsx",
                lineNumber: 79,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/lessons/VideoSummarizer.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lessons/VideoSummarizer.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
_s(VideoSummarizer, "PvfBaUiGAX+o78J7swXQRSPhcyo=");
_c = VideoSummarizer;
var _c;
__turbopack_context__.k.register(_c, "VideoSummarizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lessons/LessonPageContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonPageContent",
    ()=>LessonPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$MuxVideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lessons/MuxVideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$LessonContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lessons/LessonContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$VideoSummarizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lessons/VideoSummarizer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function LessonPageContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "0658dd76b7ca0f1048aad1b1411b82415d49edcf05a8177cc687e424c0f282f2") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0658dd76b7ca0f1048aad1b1411b82415d49edcf05a8177cc687e424c0f282f2";
    }
    const { lesson } = t0;
    const playbackId = lesson.video?.asset?.playbackId;
    let t1;
    if ($[1] !== lesson.title || $[2] !== playbackId) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$MuxVideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MuxVideoPlayer"], {
            playbackId: playbackId,
            title: lesson.title,
            className: "shadow-2xl shadow-violet-500/10"
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = lesson.title;
        $[2] = playbackId;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== lesson._id || $[5] !== lesson.title || $[6] !== playbackId) {
        t2 = playbackId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$VideoSummarizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSummarizer"], {
            lessonId: lesson._id,
            lessonTitle: lesson.title
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 34,
            columnNumber: 24
        }, this);
        $[4] = lesson._id;
        $[5] = lesson.title;
        $[6] = playbackId;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t1 || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== lesson.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-white",
            children: lesson.title
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[11] = lesson.title;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== lesson.description) {
        t5 = lesson.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-zinc-400 text-lg leading-relaxed",
            children: lesson.description
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 61,
            columnNumber: 32
        }, this);
        $[13] = lesson.description;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-zinc-800"
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== lesson.content || $[17] !== lesson.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lessons$2f$LessonContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LessonContent"], {
            content: lesson.content,
            title: lesson.title
        }, void 0, false, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[16] = lesson.content;
        $[17] = lesson.title;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t4 || $[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[19] = t4;
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t3 || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 max-w-4xl mx-auto",
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/lessons/LessonPageContent.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[23] = t3;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    return t9;
}
_c = LessonPageContent;
var _c;
__turbopack_context__.k.register(_c, "LessonPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9074ea2a._.js.map