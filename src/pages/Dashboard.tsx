import React from "react";
import Navbar from "@/components/Navbar";
import TranslationInterface from "@/components/TranslationInterface";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Languages } from "lucide-react";

const Dashboard = () => {
  // Mock user data (in a real app, this would come from auth context)
  const user = {
    name: "Maria Silva",
    email: "maria@example.com",
    subscription: "Pro",
    remainingMinutes: 784, // out of 1200 minutes (20 hours)
  };

  const recentMeetings = [
    {
      id: 1,
      title: "Reunião de equipe global",
      date: "Hoje, 14:30",
      duration: "45 min",
      languages: ["pt-BR", "en-US"],
      participants: 5,
    },
    {
      id: 2,
      title: "Apresentação para cliente internacional",
      date: "Ontem, 10:00",
      duration: "32 min",
      languages: ["pt-BR", "es-ES"],
      participants: 3,
    },
    {
      id: 3,
      title: "Treinamento de produto",
      date: "22/04/2025",
      duration: "58 min",
      languages: ["pt-BR", "en-US", "fr-FR"],
      participants: 8,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-10 px-4">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Olá, {user.name.split(" ")[0]}
            </h1>
            <p className="text-muted-foreground">
              Plano {user.subscription} · {user.remainingMinutes} minutos
              restantes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Iniciar nova tradução
              </h2>
              <TranslationInterface />
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Uso do plano</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Minutos usados</span>
                      <span className="font-medium">
                        {1200 - user.remainingMinutes} / 1200
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full"
                        style={{
                          width: `${((1200 - user.remainingMinutes) / 1200) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      Atualizar plano
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Reuniões recentes
                </h2>
                {recentMeetings.length > 0 ? (
                  <div className="space-y-4">
                    {recentMeetings.map((meeting) => (
                      <div
                        key={meeting.id}
                        className="bg-background border border-border rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <h3 className="font-medium mb-1">{meeting.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span>{meeting.date}</span>
                          <span className="mx-2">•</span>
                          <span>{meeting.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {meeting.languages.map((lang, i) => (
                            <div
                              key={i}
                              className="bg-muted py-1 px-2 rounded text-xs font-medium"
                            >
                              {lang}
                            </div>
                          ))}
                          <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                            <span>{meeting.participants}</span>
                            <span>participantes</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                      <Languages className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                      Você ainda não tem reuniões
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
