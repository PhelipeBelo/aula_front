import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Zap,
  ShieldCheck,
  Target,
  Brain,
  Bell,
  Layers,
} from "lucide-react";

const actions = [
  {
    title: "Captura Universal",
    description: "Registre ideias e tarefas instantaneamente por voz ou widget sem perder o foco.",
    href: "#",
    icon: Layers,
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50 dark:bg-blue-950/30",
    ringColorClass: "ring-blue-700/30",
  },
  {
    title: "Zenith Mode",
    description: "Bloqueie distrações e crie um ambiente digital blindado para seu trabalho profundo.",
    href: "#",
    icon: ShieldCheck,
    iconForeground: "text-green-700",
    iconBackground: "bg-green-50 dark:bg-green-950/30",
    ringColorClass: "ring-green-700/30",
  },
  {
    title: "IA Mentor",
    description: "Nossa inteligência prioriza suas tarefas baseada em urgência e impacto real.",
    href: "#",
    icon: Target,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50 dark:bg-purple-950/30",
    ringColorClass: "ring-purple-700/30",
  },
  {
    title: "Bio-Sincronização",
    description: "Otimize suas tarefas mais difíceis para os seus picos naturais de energia biológica.",
    href: "#",
    icon: Brain,
    iconForeground: "text-pink-700",
    iconBackground: "bg-pink-50 dark:bg-pink-950/30",
    ringColorClass: "ring-pink-700/30",
  },
  {
    title: "Previsão de Burnout",
    description: "Alertas inteligentes que detectam cansaço mental e sugerem pausas de recuperação.",
    href: "#",
    icon: Bell,
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50 dark:bg-red-950/30",
    ringColorClass: "ring-red-700/30",
  },
  {
    title: "Túnel de Fluxo",
    description: "Entre no estado de flow com áudio binaural e interface ultra-minimalista.",
    href: "#",
    icon: Zap,
    iconForeground: "text-primary",
    iconBackground: "bg-primary/10",
    ringColorClass: "ring-primary/30",
  },
];

export default function ZenithFeatures() {
  return (
    <section id="servicos" className="py-16 px-8 flex flex-col items-center">
      {/* Header da Seção */}
      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Tudo o que você precisa para atingir o <span className="text-primary">Pico</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ferramentas avançadas desenhadas para quem não aceita nada menos que a máxima performance.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {actions.map((action) => (
          <Card
            key={action.title}
            className={cn(
              "group relative rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            )}>
            <CardContent className="p-6">
              <div>
                <span
                  className={cn(
                    action.iconBackground,
                    action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-2 ring-inset",
                    action.ringColorClass
                  )}>
                  <action.icon aria-hidden="true" className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  <a href={action.href} className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {action.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
          <Button size="lg" className="rounded-full font-semibold px-8">
            venha conhecer nossos planos
          </Button>
        </div>
    </section>
  );
}