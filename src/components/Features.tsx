
import { Calendar, MicOff, Translate, User, Volume } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Translate className="h-6 w-6 text-brand-600" />,
      title: "Tradução em tempo real",
      description:
        "Conversas são traduzidas instantaneamente enquanto as pessoas falam, permitindo comunicação fluida entre idiomas."
    },
    {
      icon: <Volume className="h-6 w-6 text-brand-600" />,
      title: "Suporte a múltiplos idiomas",
      description:
        "Traduza de e para mais de 30 idiomas diferentes com precisão e naturalidade nos diálogos."
    },
    {
      icon: <Calendar className="h-6 w-6 text-brand-600" />,
      title: "Histórico de reuniões",
      description:
        "Acesse transcrições completas de reuniões passadas com tradução lado a lado para revisão posterior."
    },
    {
      icon: <User className="h-6 w-6 text-brand-600" />,
      title: "Perfil personalizado",
      description:
        "Configure seus idiomas preferidos e acompanhe seu uso mensal com análises detalhadas."
    },
    {
      icon: <MicOff className="h-6 w-6 text-brand-600" />,
      title: "Modo silencioso",
      description:
        "Participe passivamente de reuniões com tradução de texto apenas, sem necessidade de falar."
    },
    {
      icon: <Volume className="h-6 w-6 text-brand-600" />,
      title: "Análise de vocabulário",
      description:
        "Veja relatórios das palavras mais usadas em suas reuniões para melhorar a comunicação."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Recursos poderosos para comunicação sem fronteiras</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Tudo o que você precisa para participar de reuniões internacionais com confiança, independentemente do idioma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
