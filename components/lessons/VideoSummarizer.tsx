"use client";

import { useState } from "react";
import { Sparkles, FileText, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { summarizeVideo } from "@/lib/actions/summarize";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

interface VideoSummarizerProps {
  lessonId: string;
  lessonTitle: string;
}

export function VideoSummarizer({
  lessonId,
  lessonTitle,
}: VideoSummarizerProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await summarizeVideo(lessonId);
      if (result.success && result.summary) {
        setSummary(result.summary);
      } else {
        setError(result.error || "Failed to generate summary");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!summary) return;

    const doc = new jsPDF();
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

  return (
    <div className="mt-8 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm">
      <div className="p-6">
        {!summary ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Video Summarizer
            </h3>
            <p className="text-zinc-400 max-w-sm mb-6">
              Get an instant AI-powered summary of this lesson's key points and
              takeaways.
            </p>
            <Button
              onClick={handleSummarize}
              disabled={loading}
              className="bg-violet-600 hover:bg-violet-700 text-white gap-2 px-8"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Summarizing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Summarize Video
                </>
              )}
            </Button>
            {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-violet-400">
                <FileText className="w-5 h-5" />
                <h3 className="font-bold text-lg">Lesson Summary</h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadPDF}
                className="border-zinc-700 hover:bg-zinc-800 text-zinc-300 gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed">
              <ReactMarkdown>{summary}</ReactMarkdown>
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSummary(null)}
                className="text-zinc-500 hover:text-zinc-300"
              >
                Clear and summarize again
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
