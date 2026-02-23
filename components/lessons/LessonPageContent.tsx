"use client";

import { MuxVideoPlayer } from "./MuxVideoPlayer";
import { LessonContent } from "./LessonContent";
import { VideoSummarizer } from "./VideoSummarizer";

interface LessonPageContentProps {
  lesson: any;
  userId: string;
}

export function LessonPageContent({ lesson, userId }: LessonPageContentProps) {
  const playbackId = lesson.video?.asset?.playbackId;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        {/* Video Player */}
        <MuxVideoPlayer
          playbackId={playbackId}
          title={lesson.title}
          className="shadow-2xl shadow-violet-500/10"
        />

        {/* Video Summarizer */}
        {playbackId && (
          <VideoSummarizer lessonId={lesson._id} lessonTitle={lesson.title} />
        )}
      </div>

      <div className="space-y-6">
        {/* Lesson Title */}
        <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>

        {/* Description */}
        {lesson.description && (
          <p className="text-zinc-400 text-lg leading-relaxed">
            {lesson.description}
          </p>
        )}

        <div className="h-px bg-zinc-800" />

        {/* Content */}
        <LessonContent content={lesson.content} title={lesson.title} />
      </div>
    </div>
  );
}
