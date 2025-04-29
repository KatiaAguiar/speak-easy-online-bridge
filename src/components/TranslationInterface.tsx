
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mic, MicOff, Volume, Volume1, VolumeOff } from "lucide-react";

interface Message {
  id: number;
  speaker: string;
  originalText: string;
  translatedText: string;
  originalLang: string;
  translatedLang: string;
  isUser: boolean;
  timestamp: Date;
}

const TranslationInterface = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState("pt-BR");
  const [targetLanguage, setTargetLanguage] = useState("en-US");
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      speaker: "Sarah",
      originalText: "Hello everyone, shall we start the meeting?",
      translatedText: "Olá a todos, vamos iniciar a reunião?",
      originalLang: "en-US",
      translatedLang: "pt-BR",
      isUser: false,
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: 2,
      speaker: "Miguel",
      originalText: "Yes, I'm ready to present my findings.",
      translatedText: "Sim, estou pronto para apresentar minhas descobertas.",
      originalLang: "en-US",
      translatedLang: "pt-BR",
      isUser: false,
      timestamp: new Date(Date.now() - 60000),
    },
  ]);

  const toggleRecording = () => {
    // In a real implementation, this would start/stop the audio capture
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate user speaking
      setTimeout(() => {
        const newMessage: Message = {
          id: messages.length + 1,
          speaker: "Você",
          originalText: "Olá, eu gostaria de compartilhar alguns resultados do último trimestre.",
          translatedText: "Hello, I would like to share some results from the last quarter.",
          originalLang: "pt-BR",
          translatedLang: "en-US",
          isUser: true,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, newMessage]);
        setIsRecording(false);
      }, 3000);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSourceLanguageChange = (value: string) => {
    setSourceLanguage(value);
  };

  const handleTargetLanguageChange = (value: string) => {
    setTargetLanguage(value);
  };

  // Language options
  const languages = [
    { value: "pt-BR", label: "Português (Brasil)" },
    { value: "en-US", label: "English (US)" },
    { value: "es-ES", label: "Español" },
    { value: "fr-FR", label: "Français" },
    { value: "de-DE", label: "Deutsch" },
    { value: "it-IT", label: "Italiano" },
    { value: "ja-JP", label: "日本語" },
    { value: "zh-CN", label: "中文 (简体)" },
  ];

  return (
    <div className="flex flex-col h-full bg-background border-0 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border bg-muted/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-lg">Tradução em tempo real</h2>
          <p className="text-sm text-muted-foreground">
            Reunião iniciada há {Math.floor(Math.random() * 20) + 5} minutos
          </p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-xs text-muted-foreground mb-1">Seu idioma</label>
            <Select
              value={sourceLanguage}
              onValueChange={handleSourceLanguageChange}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-xs text-muted-foreground mb-1">Traduzir para</label>
            <Select
              value={targetLanguage}
              onValueChange={handleTargetLanguageChange}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="h-10 w-10"
              title={isMuted ? "Ativar som" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeOff className="h-5 w-5" />
              ) : (
                <Volume1 className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isUser && (
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium">
                  {message.speaker.charAt(0)}
                </span>
              </div>
            )}

            <div
              className={`rounded-lg p-4 max-w-[80%] space-y-2 ${
                message.isUser
                  ? "bg-brand-100 text-brand-900"
                  : "bg-muted/50 text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{message.speaker}</span>
                <span className="text-xs text-muted-foreground">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              
              <div className="space-y-1">
                <p className={message.isUser ? "text-brand-800" : ""}>
                  {message.originalText}
                </p>
                <p className="text-sm text-muted-foreground">
                  {message.translatedText}
                </p>
              </div>
            </div>

            {message.isUser && (
              <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-brand-800">
                  {message.speaker.charAt(0)}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="p-4 border-t border-border">
        <Button
          onClick={toggleRecording}
          className={`w-full py-6 text-lg flex items-center justify-center gap-2 ${
            isRecording ? "bg-red-500 hover:bg-red-600" : ""
          }`}
          disabled={false}
        >
          {isRecording ? (
            <>
              <MicOff className="h-5 w-5" />
              <span>Parar de falar</span>
            </>
          ) : (
            <>
              <Mic className="h-5 w-5" />
              <span>Agora eu falo</span>
            </>
          )}
        </Button>
        {isRecording && (
          <p className="text-center mt-2 text-sm text-muted-foreground animate-pulse">
            Gravando seu áudio...
          </p>
        )}
      </div>
    </div>
  );
};

export default TranslationInterface;
