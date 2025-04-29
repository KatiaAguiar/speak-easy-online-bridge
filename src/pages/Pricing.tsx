
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Básico",
      description: "Para uso individual e reuniões ocasionais",
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      features: [
        "5 horas de tradução por mês",
        "2 idiomas simultâneos",
        "Histórico de reuniões por 7 dias",
        "Transcrição e tradução em tempo real",
      ],
      isMostPopular: false,
    },
    {
      name: "Pro",
      description: "Para profissionais e equipes pequenas",
      monthlyPrice: 59.90,
      yearlyPrice: 599.90,
      features: [
        "20 horas de tradução por mês",
        "Idiomas ilimitados",
        "Histórico de reuniões por 30 dias",
        "Transcrição e tradução em tempo real",
        "Relatório de análise de vocabulário",
        "Prioridade no suporte",
      ],
      isMostPopular: true,
    },
    {
      name: "Empresarial",
      description: "Para organizações com necessidades avançadas",
      price: "Personalizado",
      features: [
        "Horas ilimitadas de tradução",
        "Todas as funcionalidades do plano Pro",
        "Gerenciamento de equipe",
        "API personalizada",
        "Suporte prioritário 24/7",
        "Treinamento de equipe",
      ],
      isMostPopular: false,
      isEnterprise: true,
    },
  ];

  const calculateYearlySaving = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12;
    const yearlyCost = yearly;
    const savings = monthlyCost - yearlyCost;
    const savingsPercent = Math.round((savings / monthlyCost) * 100);
    return savingsPercent;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Planos simples e transparentes</h1>
            <p className="subtitle max-w-2xl mx-auto">
              Escolha o plano que melhor se adeque às suas necessidades de tradução em tempo real
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1 bg-muted/80 rounded-full">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingPeriod === "monthly"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingPeriod === "yearly"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                Anual
                <span className="ml-2 bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full">
                  ECONOMIZE 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl overflow-hidden ${
                  plan.isMostPopular
                    ? "border-2 border-brand-500 shadow-lg shadow-brand-500/10"
                    : "border border-border"
                }`}
              >
                {plan.isMostPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    {plan.isEnterprise ? (
                      <div className="mb-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                    ) : (
                      <div className="mb-2">
                        <span className="text-3xl font-bold">
                          R${" "}
                          {billingPeriod === "monthly"
                            ? plan.monthlyPrice.toFixed(2)
                            : plan.yearlyPrice.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {billingPeriod === "monthly" ? "/mês" : "/ano"}
                        </span>
                      </div>
                    )}
                    
                    {billingPeriod === "yearly" && !plan.isEnterprise && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize{" "}
                        {calculateYearlySaving(
                          plan.monthlyPrice,
                          plan.yearlyPrice
                        )}
                        % pagando anualmente
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Check className="h-4 w-4 text-brand-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t border-border bg-muted/30">
                  <Link
                    to={plan.isEnterprise ? "/" : "/login?signup=true"}
                    className="block"
                  >
                    <Button
  onClick={() => handleCheckout(plan.priceId, plan.isOneTime ? "payment" : "subscription")}
  variant={plan.isMostPopular ? "default" : "outline"}
  className="w-full"
>
  {plan.isOneTime ? "Comprar agora" : "Iniciar teste grátis"}
</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="heading-3 mb-6">Perguntas frequentes</h2>
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="bg-muted/30 border border-border rounded-lg p-6 text-left">
                <h3 className="text-lg font-medium mb-2">
                  Como funciona o teste gratuito?
                </h3>
                <p className="text-muted-foreground">
                  Oferecemos 14 dias de teste gratuito em todos os planos. Você pode cancelar a qualquer momento durante o período de teste sem ser cobrado.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-lg p-6 text-left">
                <h3 className="text-lg font-medium mb-2">
                  Posso mudar de plano depois?
                </h3>
                <p className="text-muted-foreground">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entrarão em vigor imediatamente, e o valor será ajustado proporcionalmente.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-lg p-6 text-left">
                <h3 className="text-lg font-medium mb-2">
                  Quais idiomas são suportados?
                </h3>
                <p className="text-muted-foreground">
                  Nossa plataforma suporta mais de 30 idiomas, incluindo português, inglês, espanhol, francês, alemão, italiano, japonês e mandarim, entre outros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
