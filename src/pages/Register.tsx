
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Languages } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validar campos
    if (!name || !email || !password || !confirmPassword) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Conta criada com sucesso",
        description: "Você está sendo redirecionado para o login.",
      });
      navigate("/login");
    } catch (error: any) {
      let errorMessage = "Ocorreu um erro ao criar a conta.";
      
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este e-mail já está sendo usado por outra conta.";
      }
      
      toast({
        title: "Erro ao criar conta",
        description: errorMessage,
        variant: "destructive",
      });
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8 bg-background rounded-xl shadow-lg border border-border p-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
              <Languages className="h-6 w-6 text-brand-600" />
            </div>
            <h1 className="mt-6 text-2xl font-bold">Crie sua conta</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Comece seu teste gratuito de 14 dias
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu Nome"
                required
                disabled={isLoading}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar senha</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
                disabled={isLoading}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Criando conta..." : "Criar conta"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-background text-muted-foreground">
                  Já tem uma conta?
                </span>
              </div>
            </div>

            <Link to="/login">
              <Button
                variant="outline"
                className="mt-6 w-full"
                disabled={isLoading}
              >
                Fazer login
              </Button>
            </Link>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Ao se cadastrar, você concorda com nossos{" "}
            <Link to="/" className="text-brand-600 hover:text-brand-800">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link to="/" className="text-brand-600 hover:text-brand-800">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
