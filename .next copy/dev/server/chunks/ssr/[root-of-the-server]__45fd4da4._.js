module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/mux.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formats a signing key for JWT signing.
 * Handles base64-encoded keys and ensures PEM format.
 */ __turbopack_context__.s([
    "formatSigningKey",
    ()=>formatSigningKey
]);
function formatSigningKey(key) {
    // If already in PEM format, return as-is
    if (key.includes("-----BEGIN")) {
        return key;
    }
    try {
        // Try to decode base64 to get PEM-formatted key
        const decodedKey = Buffer.from(key, "base64").toString("utf-8");
        if (decodedKey.includes("-----BEGIN")) {
            // Successfully decoded to PEM format
            return decodedKey;
        }
        // If decoded but not PEM, wrap it in PEM headers
        return `-----BEGIN PRIVATE KEY-----\n${decodedKey.match(/.{1,64}/g)?.join("\n") || decodedKey}\n-----END PRIVATE KEY-----`;
    } catch  {
        // If base64 decode fails, wrap the original key
        return `-----BEGIN PRIVATE KEY-----\n${key.match(/.{1,64}/g)?.join("\n") || key}\n-----END PRIVATE KEY-----`;
    }
}
}),
"[project]/lib/actions/mux.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00374867bc7c44420ee76ef4e417f7b48e65bb437b":"createMuxUploadUrl","40ae8cc7178bc677da65bf6e5429b3233c2b8dfab1":"getMuxSignedTokens","40e48084276e8534c95d15f014972051c0156066e8":"getMuxUploadStatus","40f540a5a1664c443b7234a62917388d40c99ae6fa":"getMuxSignedToken"},"",""] */ __turbopack_context__.s([
    "createMuxUploadUrl",
    ()=>createMuxUploadUrl,
    "getMuxSignedToken",
    ()=>getMuxSignedToken,
    "getMuxSignedTokens",
    ()=>getMuxSignedTokens,
    "getMuxUploadStatus",
    ()=>getMuxUploadStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mux$2b$mux$2d$node$40$12$2e$8$2e$0$2f$node_modules$2f40$mux$2f$mux$2d$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mux+mux-node@12.8.0/node_modules/@mux/mux-node/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mux$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mux.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const mux = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mux$2b$mux$2d$node$40$12$2e$8$2e$0$2f$node_modules$2f40$mux$2f$mux$2d$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    tokenId: process.env.MUX_TOKEN_ID,
    tokenSecret: process.env.MUX_TOKEN_SECRET
});
async function createMuxUploadUrl() {
    if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
        return {
            uploadUrl: null,
            uploadId: null,
            error: "Mux API credentials are not configured"
        };
    }
    try {
        const upload = await mux.video.uploads.create({
            cors_origin: "*",
            new_asset_settings: {
                playback_policy: [
                    "signed"
                ],
                video_quality: "plus",
                inputs: [
                    {
                        generated_subtitles: [
                            {
                                language_code: "en",
                                name: "English CC"
                            }
                        ]
                    }
                ]
            }
        });
        return {
            uploadUrl: upload.url,
            uploadId: upload.id
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to create upload URL";
        console.error("Mux upload URL creation error:", error);
        return {
            uploadUrl: null,
            uploadId: null,
            error: errorMessage
        };
    }
}
async function getMuxUploadStatus(uploadId) {
    if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
        return {
            status: null,
            playbackId: null,
            assetId: null,
            sanityAssetId: null,
            error: "Mux API credentials are not configured"
        };
    }
    try {
        const upload = await mux.video.uploads.retrieve(uploadId);
        if (upload.asset_id) {
            const asset = await mux.video.assets.retrieve(upload.asset_id);
            const signedPlayback = asset.playback_ids?.find((p)=>p.policy === "signed");
            // If asset is ready, create/update the Sanity mux.videoAsset document
            if (asset.status === "ready" && signedPlayback) {
                // Generate a UUID for the Sanity document (matching plugin format)
                const sanityAssetId = crypto.randomUUID();
                // Create the mux.videoAsset document in Sanity
                // Structure matches what sanity-plugin-mux-input creates
                await __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writeClient"].createOrReplace({
                    _id: sanityAssetId,
                    _type: "mux.videoAsset",
                    status: asset.status,
                    assetId: asset.id,
                    playbackId: signedPlayback.id,
                    uploadId: asset.upload_id,
                    data: {
                        aspect_ratio: asset.aspect_ratio,
                        created_at: asset.created_at,
                        duration: asset.duration,
                        encoding_tier: asset.encoding_tier,
                        id: asset.id,
                        ingest_type: asset.ingest_type,
                        master_access: asset.master_access,
                        max_resolution_tier: asset.max_resolution_tier,
                        max_stored_frame_rate: asset.max_stored_frame_rate,
                        max_stored_resolution: asset.max_stored_resolution,
                        mp4_support: asset.mp4_support,
                        passthrough: sanityAssetId,
                        playback_ids: asset.playback_ids?.map((p)=>({
                                id: p.id,
                                policy: p.policy
                            })),
                        resolution_tier: asset.resolution_tier,
                        status: asset.status,
                        tracks: asset.tracks,
                        upload_id: asset.upload_id,
                        video_quality: asset.video_quality
                    }
                });
                return {
                    status: asset.status,
                    playbackId: signedPlayback.id,
                    assetId: asset.id,
                    sanityAssetId
                };
            }
            return {
                status: asset.status,
                playbackId: signedPlayback?.id ?? null,
                assetId: asset.id,
                sanityAssetId: null
            };
        }
        return {
            status: "waiting",
            playbackId: null,
            assetId: null,
            sanityAssetId: null
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to get upload status";
        return {
            status: null,
            playbackId: null,
            assetId: null,
            sanityAssetId: null,
            error: errorMessage
        };
    }
}
async function getMuxSignedTokens(playbackId) {
    const signingKey = process.env.MUX_SIGNING_KEY;
    const signingKeyId = process.env.MUX_SIGNING_KEY_ID;
    if (!signingKey || !signingKeyId) {
        return {
            playbackToken: null,
            thumbnailToken: null,
            storyboardToken: null,
            error: "Mux signing keys are not configured",
            debug: `Missing: ${!signingKey ? "MUX_SIGNING_KEY" : ""} ${!signingKeyId ? "MUX_SIGNING_KEY_ID" : ""}`.trim()
        };
    }
    if (!playbackId) {
        return {
            playbackToken: null,
            thumbnailToken: null,
            storyboardToken: null,
            error: "playbackId is required"
        };
    }
    try {
        const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
        const formattedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mux$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatSigningKey"])(signingKey);
        // Generate playback token (aud: "v")
        const playbackToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign({
            sub: playbackId,
            exp: expirationTime,
            kid: signingKeyId,
            aud: "v"
        }, formattedKey, {
            algorithm: "RS256"
        });
        // Generate thumbnail token (aud: "t")
        const thumbnailToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign({
            sub: playbackId,
            exp: expirationTime,
            kid: signingKeyId,
            aud: "t"
        }, formattedKey, {
            algorithm: "RS256"
        });
        // Generate storyboard token (aud: "s")
        const storyboardToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign({
            sub: playbackId,
            exp: expirationTime,
            kid: signingKeyId,
            aud: "s"
        }, formattedKey, {
            algorithm: "RS256"
        });
        return {
            playbackToken,
            thumbnailToken,
            storyboardToken
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to generate signed tokens";
        return {
            playbackToken: null,
            thumbnailToken: null,
            storyboardToken: null,
            error: errorMessage,
            debug: error instanceof Error ? error.stack : String(error)
        };
    }
}
async function getMuxSignedToken(playbackId) {
    const result = await getMuxSignedTokens(playbackId);
    return {
        token: result.playbackToken,
        error: result.error,
        debug: result.debug
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createMuxUploadUrl,
    getMuxUploadStatus,
    getMuxSignedTokens,
    getMuxSignedToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createMuxUploadUrl, "00374867bc7c44420ee76ef4e417f7b48e65bb437b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMuxUploadStatus, "40e48084276e8534c95d15f014972051c0156066e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMuxSignedTokens, "40ae8cc7178bc677da65bf6e5429b3233c2b8dfab1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMuxSignedToken, "40f540a5a1664c443b7234a62917388d40c99ae6fa", null);
}),
"[project]/sanity/lib/queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_COURSES_QUERY",
    ()=>ALL_COURSES_QUERY,
    "COURSE_BY_ID_QUERY",
    ()=>COURSE_BY_ID_QUERY,
    "COURSE_BY_SLUG_QUERY",
    ()=>COURSE_BY_SLUG_QUERY,
    "COURSE_WITH_MODULES_QUERY",
    ()=>COURSE_WITH_MODULES_QUERY,
    "DASHBOARD_COURSES_QUERY",
    ()=>DASHBOARD_COURSES_QUERY,
    "FEATURED_COURSES_QUERY",
    ()=>FEATURED_COURSES_QUERY,
    "LESSON_BY_ID_QUERY",
    ()=>LESSON_BY_ID_QUERY,
    "LESSON_BY_SLUG_QUERY",
    ()=>LESSON_BY_SLUG_QUERY,
    "LESSON_NAVIGATION_QUERY",
    ()=>LESSON_NAVIGATION_QUERY,
    "STATS_QUERY",
    ()=>STATS_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/groq@4.19.0/node_modules/groq/lib/groq.js [app-rsc] (ecmascript)");
;
const FEATURED_COURSES_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
  && featured == true
] | order(_createdAt desc)[0...6] {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  "moduleCount": count(modules),
  "lessonCount": count(modules[]->lessons[])
}`);
const ALL_COURSES_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  "moduleCount": count(modules),
  "lessonCount": count(modules[]->lessons[])
}`);
const COURSE_BY_ID_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
  && _id == $id
][0] {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  category-> {
    _id,
    title
  },
  modules[]-> {
    _id,
    title,
    description,
    lessons[]-> {
      _id,
      title,
      slug
    }
  }
}`);
const COURSE_BY_SLUG_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
  && slug.current == $slug
][0] {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  category-> {
    _id,
    title
  },
  modules[]-> {
    _id,
    title,
    description,
    lessons[]-> {
      _id,
      title,
      slug
    }
  }
}`);
const STATS_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`{
  "courseCount": count(*[_type == "course"]),
  "lessonCount": count(*[_type == "lesson"])
}`);
const DASHBOARD_COURSES_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  completedBy,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  category-> {
    _id,
    title
  },
  modules[]-> {
    lessons[]-> {
      completedBy
    }
  },
  "moduleCount": count(modules),
  "lessonCount": count(modules[]->lessons[])
}`);
const COURSE_WITH_MODULES_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
  && slug.current == $slug
][0] {
  _id,
  title,
  slug,
  description,
  tier,
  featured,
  thumbnail {
    asset-> {
      _id,
      url
    }
  },
  category-> {
    _id,
    title
  },
  modules[]-> {
    _id,
    title,
    description,
    completedBy,
    lessons[]-> {
      _id,
      title,
      slug,
      description,
      completedBy,
      video {
        asset-> {
          playbackId
        }
      }
    }
  },
  completedBy,
  "moduleCount": count(modules),
  "lessonCount": count(modules[]->lessons[]),
  "completedLessonCount": count(modules[]->lessons[]->completedBy[@==$userId])
}`);
const LESSON_BY_ID_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "lesson"
  && _id == $id
][0] {
  _id,
  title,
  slug,
  description,
  video {
    asset-> {
      assetId,
      playbackId,
      status,
      data {
        duration,
        tracks
      }
    }
  },
  content,
  completedBy,
  "courses": *[_type == "course" && ^._id in modules[]->lessons[]->_id] | order(
    select(tier == "free" => 0, tier == "pro" => 1, tier == "ultra" => 2)
  ) {
    _id,
    title,
    slug,
    tier,
    modules[]-> {
      _id,
      title,
      lessons[]-> {
        _id,
        title,
        slug,
        completedBy
      }
    }
  }
}`);
const LESSON_BY_SLUG_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "lesson"
  && slug.current == $slug
][0] {
  _id,
  title,
  slug,
  description,
  video {
    asset-> {
      assetId,
      playbackId,
      status,
      data {
        duration,
        tracks
      }
    }
  },
  content,
  completedBy,
  "courses": *[_type == "course" && ^._id in modules[]->lessons[]->_id] | order(
    select(tier == "free" => 0, tier == "pro" => 1, tier == "ultra" => 2)
  ) {
    _id,
    title,
    slug,
    tier,
    modules[]-> {
      _id,
      title,
      lessons[]-> {
        _id,
        title,
        slug,
        completedBy
      }
    }
  }
}`);
const LESSON_NAVIGATION_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$40$4$2e$19$2e$0$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineQuery"])(`*[
  _type == "course"
  && $lessonId in modules[]->lessons[]->_id
][0] {
  _id,
  title,
  tier,
  modules[]-> {
    _id,
    title,
    lessons[]-> {
      _id,
      title
    }
  }
}`);
}),
"[project]/lib/actions/summarize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4084c25158262fadd45279e013b5fd3001dd88113e":"summarizeVideo"},"",""] */ __turbopack_context__.s([
    "summarizeVideo",
    ()=>summarizeVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.0-beta.128_zod@4.1.13/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$30_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@3.0.30_zod@4.1.13/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$toolkit$40$5$2e$0$2e$1$2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@portabletext+toolkit@5.0.1/node_modules/@portabletext/toolkit/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_2bd53b7e1d3282fea8d26b29ec0309a9/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function summarizeVideo(lessonId) {
    try {
        // 1. Fetch lesson data from Sanity
        const lesson = await __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LESSON_BY_ID_QUERY"], {
            id: lessonId
        });
        if (!lesson) {
            throw new Error("Lesson not found");
        }
        // 2. Prepare context for AI
        const lessonTitle = lesson.title || "Untitled Lesson";
        const lessonDescription = lesson.description || "";
        const lessonContent = lesson.content ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$toolkit$40$5$2e$0$2e$1$2f$node_modules$2f40$portabletext$2f$toolkit$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPlainText"])(lesson.content) : "";
        // 3. Try to fetch audio stream from Mux
        let audioData;
        let transcript = "";
        const playbackId = lesson.video?.asset?.playbackId;
        if (playbackId) {
            try {
                // Fetch the M4A audio stream from Mux directly
                const audioResponse = await fetch(`https://stream.mux.com/${playbackId}/audio.m4a`);
                if (audioResponse.ok) {
                    const arrayBuffer = await audioResponse.arrayBuffer();
                    audioData = new Uint8Array(arrayBuffer);
                } else {
                    console.warn("Failed to fetch audio stream from Mux, status:", audioResponse.status);
                }
            } catch (e) {
                console.warn("Failed to fetch audio from Mux:", e);
            }
        }
        // 4. Prepare messages for Gemini
        const systemPrompt = "You are an expert educational assistant at Ai Academy. Your goal is to provide a concise, structured, and helpful summary of a lesson based on its context and the actual video audio. Use Markdown for formatting.";
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
        const modelOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$30_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])("gemini-2.5-flash");
        // 5. Generate summary using Gemini
        const { text: summary } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$0$2d$beta$2e$128_zod$40$4$2e$1$2e$13$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])(audioData ? {
            model: modelOpts,
            system: systemPrompt,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: finalPrompt
                        },
                        {
                            type: "file",
                            data: Buffer.from(audioData).toString("base64"),
                            mediaType: "audio/m4a"
                        }
                    ]
                }
            ]
        } : {
            model: modelOpts,
            system: systemPrompt,
            prompt: finalPrompt
        });
        return {
            success: true,
            summary
        };
    } catch (error) {
        console.error("Summarization error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to generate summary"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    summarizeVideo
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_2bd53b7e1d3282fea8d26b29ec0309a9$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(summarizeVideo, "4084c25158262fadd45279e013b5fd3001dd88113e", null);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45fd4da4._.js.map