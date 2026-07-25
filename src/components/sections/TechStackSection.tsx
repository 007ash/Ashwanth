import { Code2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-24 mt-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeIn className="flex flex-col items-center mb-16 text-center">
          <div className="p-3 glass rounded-2xl mb-6 inline-flex">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            Core Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Tools and frameworks I use to bring ideas to production.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Core Computer Science & Paradigms",
              tools: ["Data Structures and Algorithms (DSA)", "Object-Oriented Programming (OOPs)", "DataBase Management (DBMS)", "System Design and Architecture"],
            },
            {
              title: "Specialized AI/ML",
              tools: ["Computer Vision (CV)", "Explainable AI (XAI)", "Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Machine Learning Operations (MLOps)"],
            },
            { title: "AI/ML Technologies", tools: ["Machine Learning", "Deep Learning", "Reinforcement Learning",  "TensorFlow/PyTorch", "Scikit-learn"] },
            {
              title: "Devops & Software Engineering",
              tools: ["Git / GitHub", "GitHub Actions", "Docker", "Kubernetes", "CI/CD Pipelines", "Cloud Platforms (GCP/AWS)"],
            },
          ].map((category, idx) => (
            <FadeIn
              key={category.title}
              delay={idx * 0.15}
              direction="up"
              className="h-full"
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                <h3 className="font-heading font-semibold mb-6 text-sm text-primary uppercase tracking-wider relative z-10">
                  {category.title}
                </h3>
                <ul className="flex flex-col gap-4 font-medium relative z-10">
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-3 text-foreground/80 group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
