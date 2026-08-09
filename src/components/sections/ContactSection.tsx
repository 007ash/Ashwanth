import { ArrowRight, Download, Mail, Sparkles,} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-24 px-6 mb-20">
      <FadeIn className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-sm backdrop-blur-lg md:p-10 lg:p-12 dark:shadow-[0_10px_50px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_55%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Open for opportunities
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s build something meaningful.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  I&apos;m currently exploring roles in AI/ML, data science, and
                  full-stack development. If you&apos;re looking for someone who
                  enjoys turning ambitious ideas into practical, production-ready
                  products, I&apos;d love to connect.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:6ashwanth007@gamil.com?subject=Let%27s%20connect">
                    <Mail className="mr-2 h-4 w-4" />
                    Say hello
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="/Ashwanth_Senthilkumar.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <p className="text-sm font-semibold text-foreground">Preferred contact</p>
                <a
                  href="mailto:6ashwanth007@gmail.com"
                  className="mt-2 inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-4 w-4" />
                  6ashwanth007@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <p className="text-sm font-semibold text-foreground">Find me online</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/007ash"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="mailto:6ashwanth007@gmail.com?subject=Collaboration%20idea"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    Email me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashwanth-senthilkumar/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <p className="text-sm font-semibold text-foreground">Response time</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  I usually reply within a day or two, and I&apos;m happy to chat
                  about internships, collaborations, or ambitious side projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
