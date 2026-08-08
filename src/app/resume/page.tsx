import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export const metadata = {
  title: "Resume",
  description: "View my resume in full screen.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <a
            href="/Ashwanth_Senthilkumar.pdf"
            download="Ashwanth_Senthilkumar_Resume.pdf"
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
          <iframe
            src="/Ashwanth_Senthilkumar.pdf"
            title="Ashwanth Senthilkumar Resume"
            className="h-[80vh] w-full min-h-[700px]"
          />
        </div>
      </div>
    </main>
  );
}
