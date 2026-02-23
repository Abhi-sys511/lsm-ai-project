import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { sanityFetch } from "@/sanity/lib/live";
import { LESSON_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { LessonPageContent } from "@/components/lessons/LessonPageContent";

interface PageProps {
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

export default async function LessonPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { userId } = await auth();

  if (!userId) return notFound();

  const { data: lesson } = await sanityFetch({
    query: LESSON_BY_SLUG_QUERY,
    params: { slug: resolvedParams.lessonSlug },
  });

  if (!lesson) return notFound();

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="px-4 py-8 md:px-8">
          <LessonPageContent lesson={lesson} userId={userId} />
        </div>
      </div>
    </div>
  );
}
