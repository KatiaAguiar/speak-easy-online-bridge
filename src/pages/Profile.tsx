import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MicOff, Settings, Languages, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Maria Silva",
    email: "maria@example.com",
    subscription: "Pro",
    subscriptionRenewal: "15/05/2025",
    remainingMinutes: 784, // out of 1200 minutes (20 hours)
    preferredLanguage: "pt-BR",
    joinDate: "10/03/2025",
  };

  // Mock meeting history
  const meetingHistory = [
    {
      id: 1,
      title: "Reunião de equipe global",
      date: "28/04/2025",
      time: "14:30",
      duration: 45,
      languages: ["pt-BR", "en-US"],
      participants: 5,
    },
    {
      id: 2,
      title: "Apresentação para cliente internacional",
      date: "27/04/2025",
      time: "10:00",
      duration: 32,
      languages: ["pt-BR", "es-ES"],
      participants: 3,
    },
    {
      id: 3,
      title: "Treinamento de produto",
      date: "22/04/2025",
      time: "09:15",
      duration: 58,
      languages: ["pt-BR", "en-US", "fr-FR"],
      participants: 8,
    },
    {
      id: 4,
      title: "Entrevista com candidato",
      date: "18/04/2025",
      time: "11:30",
      duration: 27,
      languages: ["pt-BR", "en-US"],
      participants: 2,
    },
    {
      id: 5,
      title: "Conferência internacional",
      date: "15/04/2025",
      time: "15:00",
      duration: 120,
      languages: ["pt-BR", "en-US", "zh-CN", "ja-JP"],
      participants: 12,
    },
  ];

  // Mock word usage data
  const wordUsageData = [
    { word: "projeto", count: 78, translations: ["project", "proyecto"] },
    { word: "reunião", count: 65, translations: ["meeting", "reunión"] },
    { word: "equipe", count: 53, translations: ["team", "equipo"] },
    { word: "desenvolvimento", count: 47, translations: ["development", "desarrollo"] },
    { word: "cliente", count: 42, translations: ["client", "cliente"] },
    { word: "produto", count: 39, translations: ["product", "producto"] },
    { word: "prazo", count: 36, translations: ["deadline", "plazo"] },
    { word: "estratégia", count: 31, translations: ["strategy", "estrategia"] },
    { word: "objetivo", count: 29, translations: ["goal", "objetivo"] },
    { word: "resultados", count: 28, translations: ["results", "resultados"] },
  ];

  // Calculate total meeting minutes
  const totalMeetingMinutes = meetingHistory.reduce(
    (total, meeting) => total + meeting.duration,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Perfil do usuário</h1>
              <p className="text-muted-foreground">
                Gerencie sua conta e veja estatísticas de uso
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </Button>
              <Button variant="default">Atualizar plano</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Informações da conta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Nome</span>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-sm text-muted-foreground">
                      Plano atual
                    </span>
                    <span className="font-medium">{user.subscription}</span>
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-sm text-muted-foreground">
                      Próxima renovação
                    </span>
                    <span className="font-medium">
                      {user.subscriptionRenewal}
                    </span>
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-sm text-muted-foreground">
                      Data de cadastro
                    </span>
                    <span className="font-medium">{user.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-3">
              <Tabs defaultValue="usage">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="usage" className="flex-1">
                    <User className="mr-2 h-4 w-4" />
                    <span>Uso</span>
                  </TabsTrigger>
                  <TabsTrigger value="meetings" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Reuniões</span>
                  </TabsTrigger>
                  <TabsTrigger value="vocabulary" className="flex-1">
                    <Languages className="mr-2 h-4 w-4" />
                    <span>Vocabulário</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="usage">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle>Minutos restantes</CardTitle>
                        <CardDescription>
                          Plano atual: {user.subscription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              {user.remainingMinutes} min
                            </span>
                            <span className="text-muted-foreground">
                              de 1200 min
                            </span>
                          </div>
                          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-500"
                              style={{
                                width: `${(user.remainingMinutes / 1200) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle>Total utilizado</CardTitle>
                        <CardDescription>
                          Este mês: {totalMeetingMinutes} minutos
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-brand-600">
                              {meetingHistory.length}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Reuniões
                            </div>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-brand-600">
                              {Math.round(totalMeetingMinutes / 60)}h{" "}
                              {totalMeetingMinutes % 60}min
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Duração total
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Idiomas mais usados</CardTitle>
                      <CardDescription>
                        Baseado no histórico de reuniões
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                            Português
                          </div>
                          <div className="font-medium text-lg">
                            100<span className="text-sm">%</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                            Inglês
                          </div>
                          <div className="font-medium text-lg">
                            85<span className="text-sm">%</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                            Espanhol
                          </div>
                          <div className="font-medium text-lg">
                            40<span className="text-sm">%</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                            Francês
                          </div>
                          <div className="font-medium text-lg">
                            15<span className="text-sm">%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="meetings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Histórico de reuniões</CardTitle>
                      <CardDescription>
                        Suas reuniões mais recentes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {meetingHistory.length > 0 ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Reunião</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Duração</TableHead>
                                <TableHead>Idiomas</TableHead>
                                <TableHead>Participantes</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {meetingHistory.map((meeting) => (
                                <TableRow key={meeting.id}>
                                  <TableCell className="font-medium">
                                    {meeting.title}
                                  </TableCell>
                                  <TableCell>
                                    {meeting.date} às {meeting.time}
                                  </TableCell>
                                  <TableCell>
                                    {Math.floor(meeting.duration / 60) > 0
                                      ? `${Math.floor(meeting.duration / 60)}h `
                                      : ""}
                                    {meeting.duration % 60}min
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                      {meeting.languages.map((lang, i) => (
                                        <span
                                          key={i}
                                          className="bg-muted text-xs px-2 py-0.5 rounded"
                                        >
                                          {lang}
                                        </span>
                                      ))}
                                    </div>
                                  </TableCell>
                                  <TableCell>{meeting.participants}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                            <MicOff className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground">
                            Você ainda não tem reuniões registradas
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="vocabulary">
                  <Card>
                    <CardHeader>
                      <CardTitle>Palavras mais usadas</CardTitle>
                      <CardDescription>
                        Análise do seu vocabulário nas reuniões
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {wordUsageData.length > 0 ? (
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Palavra</TableHead>
                                <TableHead className="text-right">
                                  Ocorrências
                                </TableHead>
                                <TableHead>Traduções comuns</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {wordUsageData.map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">
                                    {item.word}
                                  </TableCell>
                                  <TableCell className="text-right">
                                    {item.count}
                                  </TableCell>
                                  <TableCell>
                                    {item.translations.join(", ")}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Languages className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground">
                            Sem dados de vocabulário disponíveis
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
