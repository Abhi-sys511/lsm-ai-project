(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/next-sanity@11.6.10_@emotio_6b58c2b350cc127b1c80dca917ec97bd/node_modules/next-sanity/dist/RefreshOnMount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefreshOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function RefreshOnMount() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, mount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "RefreshOnMount.useReducer": ()=>true
    }["RefreshOnMount.useReducer"], false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RefreshOnMount.useEffect": ()=>{
            if (!mounted) {
                mount();
                router.refresh();
            }
        }
    }["RefreshOnMount.useEffect"], [
        mounted,
        router
    ]);
    return null;
}
RefreshOnMount.displayName = "RefreshOnMount";
;
 //# sourceMappingURL=RefreshOnMount.js.map
}),
]);

//# sourceMappingURL=46626_next-sanity_dist_RefreshOnMount_e5d16d95.js.map