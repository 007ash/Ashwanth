import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto py-14 px-6 max-w-4xl flex flex-col gap-10"
    >
      {/* Header Section */}
      <FadeIn className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </FadeIn>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column: Image & Quick Stats */}
        <FadeIn
          direction="up"
          delay={0.2}
          className="flex flex-col gap-6 md:col-span-1 items-center md:items-start"
        >
          <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-none aspect-[3/4] rounded-2xl overflow-hidden border bg-muted">
            <Image
              src="/proPhoto2.jpg"
              alt="Ashwanth Profile Picture"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Current Status</h3>
            <p className="text-muted-foreground text-sm">
              Final year CSE Undergraduate
            </p>
            <p className="text-muted-foreground text-sm">
              Sri Ramakrishna Engineering College
            </p>
            <p className="text-muted-foreground text-sm">
              Coimabatore
            </p>
          </div>
        </FadeIn>

        {/* Right Column: Biography & Leadership */}
        <FadeIn
          direction="up"
          delay={0.4}
          className="flex flex-col gap-8 md:col-span-2 text-lg text-muted-foreground leading-relaxed"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-foreground">
              Engineering with Purpose
            </h3>
            <p>
              Computer Science engineer specializing in AI & Machine Learning, building intelligent, full-stack solutions for real-world problems. 
            </p>
            <p>
              Passionate about turning complex ideas into practical software and continuously learning through building.
            </p>
            <p>
              ✨ <strong>Production Over Theory</strong>: Turning ideas into real-world software solutions.
            </p>
            <p>
              🤝 <strong>Collaborative Growth</strong>: Driving innovation through teamwork and technical leadership.
            </p>
            <p>
              💡 <strong>Continuous Iteration</strong>: Learning by building, failing, optimizing, and scaling.
            </p>  
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-foreground">
              Leadership & Community
            </h3>
            <p>
              Beyond the code editor, I am deeply involved in fostering
              technical communities. I currently serve as the{" "}
              <strong>
                Chairperson for the IEEE Computational Intelligence Society
                (CIS) Student Branch Chapter
              </strong>{" "}
              at Sri Ramakrishna Engineering College.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap mt-2">
            <Badge variant="secondary" className="text-sm py-3 px-3">
              IEEE CIS Chairperson
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              AI/ML Honors
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              Data Science
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              LLM
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              Explainable AI
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              Generative AI
            </Badge>
            <Badge variant="secondary" className="text-sm py-3 px-3">
              Cloud Computing
            </Badge>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
