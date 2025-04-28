import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Languages, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-800 mb-8">
            <Languages className="h-4 w-4" />
            <span className="text-sm font-medium">Tradução em tempo real</span>
          </div>
          
          <h1 className="heading-1 max-w-4xl mb-6 bg-gradient-to-r from-brand-700 via-brand-600 to-accent2-600 text-transparent bg-clip-text">
            Participe de reuniões em qualquer idioma, sem barreiras
          </h1>
          
          <p className="subtitle max-w-2xl mb-10">
            Traduza reuniões online em tempo real. Fale seu idioma e seja compreendido em qualquer outro. 
            Ideal para equipes globais, aulas internacionais e comunicação sem fronteiras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/login?signup=true">
              <Button size="lg" className="text-base py-6 px-8">
                Comece seu teste grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-base py-6 px-8">
                Ver planos
              </Button>
            </Link>
          </div>
          
          {/* Hero image/interface preview */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-2xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-400/5 to-accent2-500/5 rounded-xl"></div>
              
              {/* Mock interface preview */}
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col">
                <div className="bg-muted rounded-lg p-4 mb-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center">
                      <Languages className="h-5 w-5 text-brand-700" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">Reunião em andamento</h3>
                      <p className="text-sm text-muted-foreground">Inglês → Português</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <Button size="sm" variant="outline">Encerrar</Button>
                  </div>
                </div>
                
                <div className="flex-grow bg-white rounded-lg border border-border p-4 mb-4 shadow-sm overflow-y-auto">
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                      <div className="bg-muted/50 rounded-lg p-3 text-sm text-left max-w-[80%]">
                        <p className="text-xs text-muted-foreground mb-1">John (English)</p>
                        <p>Hello everyone, today we will discuss our international expansion plans.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                      <div className="bg-muted/50 rounded-lg p-3 text-sm text-left max-w-[80%]">
                        <p className="text-xs text-muted-foreground mb-1">John (Português)</p>
                        <p>Olá a todos, hoje vamos discutir nossos planos de expansão internacional.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-brand-100 rounded-lg p-3 text-sm text-left max-w-[80%]">
                        <p className="text-xs text-brand-700 mb-1">Você (Português)</p>
                        <p>Ótimo! Estou ansioso para ouvir sobre os novos mercados.</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-brand-200 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-brand-700">Você</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button className="w-full">Agora eu falo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
