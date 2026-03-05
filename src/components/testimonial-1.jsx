"use client"
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "CEO na FlowTech",
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
    review: "A bio-sincronização da Zenith mudou minha vida. Consigo identificar meus picos de energia e agendar as reuniões mais importantes exatamente nesses momentos.",
    rating: 5.0
  },
  {
    id: 2,
    name: "Beatriz Soares",
    role: "Product Manager",
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
    review: "Finalmente um ecossistema que protege meu foco. O modo 'Deep Work' automático baseado no meu ritmo circadiano é simplesmente genial.",
    rating: 5.0
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    role: "Desenvolvedor Senior",
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
    review: "O dashboard é limpo e intuitivo. Integrar minha rotina de sono com minhas tarefas de código me fez produzir 40% mais em menos tempo.",
    rating: 4.8
  },
  {
    id: 4,
    name: "Mariana Costa",
    role: "Designer Freelancer",
    image: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
    review: "O que eu mais amo na Zenith é como ela entende que produtividade não é apenas fazer mais, mas fazer o que importa com clareza mental.",
    rating: 5.0
  }
];

const RatingStars = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={cn(
          "size-4",
          index < Math.floor(rating) ? "fill-primary text-primary" : "fill-none text-muted-foreground"
        )}
      />
    ))}
    <span className="text-muted-foreground ms-2 text-sm font-medium">({rating.toFixed(1)})</span>
  </div>
);

export function TestimonialsSection({ className }) {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section id="avaliações" className={cn("py-20 bg-background/50", className)}>
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Histórias de <span className="text-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Veja como líderes e criativos estão utilizando o ecossistema Zenith para dominar suas rotinas e atingir o pico produtivo.
          </p>
        </header>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="size-12 border-2 border-background shadow-md">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <CardTitle className="text-base font-bold">{item.name}</CardTitle>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{item.review}"
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto border-t pt-6 border-border/20">
                    <RatingStars rating={item.rating} />
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles do Carrossel */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    current === index ? "bg-primary w-8" : "bg-muted w-2"
                  )}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20 hover:bg-primary/10" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20 hover:bg-primary/10" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialsSection;