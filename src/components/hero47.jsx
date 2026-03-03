import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Hero47 = ({
  heading = "Zenith",
  subheading = " Atinja o pico da sua produtividade.",
  description = "O ecossistema inteligente que organiza sua rotina, protege seu foco e utiliza bio-sincronização para levar você ao desempenho máximo todos os dias.",

  buttons = {
    primary: {
      text: "Conhecer Planos",
      url: "#pricing", // Ancora para a seção de preços que criamos
    },
    secondary: {
      text: "Ver funcionalidades",
      url: "#features",
    },
  },

  image = {
    src: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop", 
    alt: "Zenith App Interface",
  },

  className
}) => {
  return (
    <section className={cn("bg-background py-20 lg:py-32 flex items-center justify-center min-h-[90-vh]", className)}>
      <div
        className="container flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:justify-between">
        
        {/* Texto e Conteúdo */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:w-3/5">
          <h1
            className="text-6xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-primary">{heading}</span>
            <span className="text-muted-foreground block lg:inline">{subheading}</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5">
            <Button asChild size="lg" className="rounded-full px-8 py-7 shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              <a href={buttons.primary?.url} className="flex items-center gap-2">
                <span className="text-base font-bold whitespace-nowrap">
                  {buttons.primary?.text}
                </span>
                <ArrowUpRight className="size-5" />
              </a>
            </Button>
            
            <Button asChild variant="link" className="text-foreground font-semibold hover:text-primary transition-colors">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>

        {/* Mockup do iPhone Centralizado/Alinhado */}
        <div className="relative z-10 lg:w-2/5 flex justify-center">
          <div
            className="absolute top-[2%] left-1/2 h-[93%] w-[70%] -translate-x-[50%] overflow-hidden rounded-[40px] z-0">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover" />
          </div>
          <img
            className="relative z-10 drop-shadow-2xl"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={380}
            height={750}
            alt="Zenith iPhone Mockup" />
        </div>

      </div>
    </section>
  );
};

export { Hero47 };