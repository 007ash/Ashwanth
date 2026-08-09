import Link from "next/link";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {Mail} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 px-8 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            Built by Ashwanth. The source code is available on{" "}
            <Link
              href="https://github.com/007ash/My-Portfolio"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/007ash"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashwanth-senthilkumar/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="#contact" aria-label="Contact">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
