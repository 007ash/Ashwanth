import { ArrowLeft, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FadeIn } from "@/components/ui/fade-in";

const certificates = [
  {
    id: "cert-1",
    title: "Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI / Stanford Online",
    date: "June 2025",
    image: "/certificates/Machine-Learning-Specialization-Certificate.png",
  },
  {
    id: "cert-2",
    title: "Citizen Data Science using Python Certification",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    image: "/certificates/Citizen-Data-Science-using-Python-Certication.png",
  },
  {
    id: "cert-3",
    title: "Career Essentials in GitHub Professional Certification",
    issuer: "LinkedIn Learning / GitHub",
    date: "Jan 2025",
    image: "/certificates/GitHub Certificate.jpg",
  },
  {
    id: "cert-4",
    title: "Deep Learning IIT-Ropar",
    issuer: "NPTEL / IIT Ropar",
    date: "Jan-Apr 2025",
    image: "/certificates/Deep Learning NPTEL.png",
  },
  {
    id: "cert-5",
    title: "Foundation of Prompt Engineering",
    issuer: "AWS Training and Certification",
    date: "Dec 2025",
    image: "/certificates/Prompt-Engineering.png",
  },
  {
    id: "cert-6",
    title: "Java Training and Certification",
    issuer: "Spoken Tutorial / IIT-Bombay",
    date: "July 2025",
    image: "/certificates/Java Certificate.png",
  },
  {
    id: "cert-7",
    title: "Web Development Web 3.0",
    issuer: "Teachnooks / Cognizance IIT-Roorkee",
    date: "Sep 2024",
    image: "/certificates/Web 3.0 Certificate.png",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-24 max-w-6xl flex flex-col gap-10">
        <FadeIn direction="up" className="flex flex-col gap-4">
          <Button asChild variant="ghost" className="w-fit rounded-full px-0 hover:bg-transparent">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Certifications
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A complete collection of my professional certificates, coursework recognitions, and skill-based achievements.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1} direction="up">
              <div className="flex flex-col gap-4 rounded-xl border bg-card/70 p-6 shadow-sm">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{cert.title}</h2>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {cert.date}
                  </p>
                </div>

                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border bg-muted/20">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full">
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl border-muted bg-background p-1">
                    <DialogHeader className="p-4 pb-0">
                      <DialogTitle>{cert.title}</DialogTitle>
                    </DialogHeader>
                    <div className="relative mt-4 w-full aspect-[4/3] overflow-hidden rounded-b-lg">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain bg-muted/20"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
