import { Star } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero7 = ({
  heading = "Atinja o pico da sua produtividade",
  description = "O ecossistema inteligente que organiza sua rotina, protege seu foco e utiliza bio-sincronização para levar você ao desempenho máximo todos os dias.",

  button = {
    text: "Conhecer Planos",
    url: "#pricing",
  },

  reviews = {
    count: 500,
    rating: 5.0,
    avatars: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "Usuário 1" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", alt: "Usuário 2" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "Usuário 3" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp", alt: "Usuário 4" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp", alt: "Usuário 5" },
    ],
  },

  className
}) => {
  return (
    /* pt-20 no mobile e pt-24 no desktop: espaço suficiente para uma navbar sem exagerar */
    <section id="home" className={cn("relative flex min-h-screen w-full flex-col items-center justify-center pt-20 lg:pt-24 pb-10 overflow-hidden bg-background", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          
          {/* Conteúdo Principal */}
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
              <span className="text-primary">Zenith</span>
              <span className="block text-foreground mt-2">{heading}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground lg:text-2xl leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Botão de Ação */}
          <div className="flex flex-col items-center">
            <Button asChild size="lg" className="h-14 rounded-full px-10 text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95">
              <a href={button.url}>{button.text}</a>
            </Button>
          </div>

          {/* Prova Social / Reviews */}
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-10 border-2 border-background shadow-sm">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-bold">{reviews.rating?.toFixed(1)}</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Aprovado por mais de {reviews.count}+ usuários
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero7 };