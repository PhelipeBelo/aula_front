"use client";
import { Check } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Pricing4 = ({
  title = "Invista no seu Pico",
  description = "Escolha o plano que melhor se adapta ao seu nível de ambição e fluxo de trabalho.",

  plans = [
    {
      name: "Base",
      badge: "Essencial",
      monthlyPrice: "R$ 19",
      yearlyPrice: "R$ 190",
      features: [
        "Captura Universal ilimitada",
        "Visualizador Timeline",
        "Etiquetas de Energia",
        "Sincronização entre 2 dispositivos",
      ],
      buttonText: "Começar Agora",
    },
    {
      name: "Ascensão",
      badge: "O mais assinado",
      monthlyPrice: "R$ 39",
      yearlyPrice: "R$ 390",
      features: [
        "Tudo no plano Base",
        "IA Mentor de Prioridades",
        "Zenith Mode (Foco Total)",
        "Relatórios de Performance",
        "Integrações ilimitadas",
      ],
      buttonText: "Subir de Nível",
      isPopular: true,
    },
    {
      name: "Peak",
      badge: "Performance Máxima",
      monthlyPrice: "R$ 69",
      yearlyPrice: "R$ 690",
      features: [
        "Tudo no plano Ascensão",
        "Bio-Sincronização Circadiana",
        "Previsão de Burnout por IA",
        "Modo Túnel de Fluxo",
        "Cápsulas de Mindfulness",
      ],
      buttonText: "Atingir o Pico",
      isPopular: false,
    },
  ],

  className
}) => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section id="planos" className={cn("py-32", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-4xl font-bold text-pretty lg:text-6xl">
            {title}
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="max-w-3xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div
              className="flex h-11 w-fit shrink-0 items-center rounded-md bg-muted p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}>
                <div
                  className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                  <Label
                    htmlFor="monthly"
                    className="flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary">
                    Mensal
                  </Label>
                </div>
                <div
                  className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem value="annually" id="annually" className="peer sr-only" />
                  <Label
                    htmlFor="annually"
                    className="flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary">
                    Anual
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex w-full flex-col rounded-2xl border p-8 text-left transition-all",
                  plan.isPopular ? "border-primary ring-1 ring-primary shadow-lg scale-105 z-10" : "bg-card"
                )}>
                <Badge className={cn(
                  "mb-8 block w-fit uppercase",
                  plan.isPopular ? "bg-primary text-primary-foreground" : "secondary"
                )}>
                  {plan.badge}
                </Badge>
                <span className="text-5xl font-bold">
                  {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <p className="mt-2 text-muted-foreground">
                  {isAnnually ? "por ano" : "por mês"}
                </p>
                <Separator className="my-8" />
                <div className="flex h-full flex-col justify-between gap-12">
                  <ul className="space-y-4 text-muted-foreground">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="size-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.isPopular ? "default" : "outline"} 
                    className={cn("w-full py-6 text-lg font-bold", plan.isPopular && "shadow-md")}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing4 };