import { Download, FileUser, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function ResumeSection() {
  return (
    <section id="resume" className="container mx-auto py-16 px-6 max-w-4xl">
      <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 glass-card rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="flex flex-col gap-4 relative z-10 text-center md:text-left">
          <FileUser className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Download My Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Get a comprehensive overview of my professional experience,
            education, and technical skills in a concise format.
          </p>
        </div>

        <div className="relative z-10 shrink-0 grid sm:flex-row gap-3">
          <Button
            asChild
            size="lg"
            className="font-semibold rounded-full px-8 py-6 text-lg group"
          >
            <a
              href="/Ashwanth_Senthilkumar.pdf"
              download="Ashwanth_Senthilkumar_Resume.pdf"
            >
              <Download className="mr-3 h-6 w-6 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </Button>
          <Button asChild size="lg" variant="outline"
          className="font-semibold rounded-full px-8 py-6 text-lg group">
            <Link href="/resume">
              <Eye className="mr-3 h-6 w-6 group-hover:-translate-y-1 transition-transform" />
              View Resume
            </Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
