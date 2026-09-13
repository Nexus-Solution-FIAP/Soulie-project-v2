import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageSquare, User, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Card } from '../components/Card';
import type { ContactFormData } from '../types/contato';

export function Contato() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    mode: 'onBlur' 
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    console.log("Formulário enviado com sucesso:", data);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset(); 

      // Redireciona para o dashboard após 3 segundos usando useNavigate
      setTimeout(() => {
        setIsSuccess(false);
        navigate('/dashboard');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <header className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-3">
          <MessageSquare className="w-8 h-8 text-nature-brand" />
          Fale Conosco
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Tem alguma dúvida técnica, sugestão para o aplicativo ou quer falar sobre parcerias?
          Envie sua mensagem e a equipe dos Guardiões retornará em até 48 horas.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="md:col-span-1 space-y-6">
          <Card variant="accent" className="h-full">
            <h3 className="font-display text-xl font-bold text-white mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-nature-bg rounded-lg border border-nature-border">
                  <Mail className="w-5 h-5 text-nature-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">E-mail</p>
                  <p className="text-gray-400 text-sm">soulie@soulup.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-nature-bg rounded-lg border border-nature-border">
                  <User className="w-5 h-5 text-nature-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <p className="text-gray-400 text-sm">+55 11 3385-8010</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-nature-border">
                <p className="text-sm text-gray-500 italic">
                  Nosso tempo médio de resposta é de até 48 horas em dias úteis.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card variant="brand">

            {isSuccess && (
              <div className="mb-6 bg-nature-success/10 border border-nature-success/30 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-nature-success shrink-0" />
                <div>
                  <h4 className="text-nature-success font-bold">Mensagem enviada!</h4>
                  <p className="text-sm text-nature-success/80">Obrigado por entrar em contato. Retornaremos em breve.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome Completo <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className={`w-full bg-nature-bg border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-nature-brand transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-nature-border focus:border-nature-brand'
                  }`}
                  {...register("name", { 
                    required: "O nome é obrigatório",
                    minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres" }
                  })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-mail <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com.br"
                  className={`w-full bg-nature-bg border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-nature-brand transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-nature-border focus:border-nature-brand'
                  }`}
                  {...register("email", { 
                    required: "O e-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Insira um endereço de e-mail válido"
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Assunto <span className="text-red-400">*</span>
                </label>
                <select
                  id="subject"
                  className={`w-full bg-nature-bg border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-nature-brand transition-colors appearance-none ${
                    errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-nature-border focus:border-nature-brand'
                  }`}
                  {...register("subject", { required: "Selecione um assunto" })}
                >
                  <option value="" disabled selected>Selecione uma opção</option>
                  <option value="duvida">Dúvida Técnica</option>
                  <option value="sugestao">Sugestão de Funcionalidade</option>
                  <option value="parceria">Parceria / Negócios</option>
                  <option value="outro">Outro assunto</option>
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Como podemos te ajudar?"
                  className={`w-full bg-nature-bg border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-nature-brand transition-colors resize-y ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-nature-border focus:border-nature-brand'
                  }`}
                  {...register("message", { 
                    required: "A mensagem é obrigatória",
                    minLength: { value: 10, message: "Sua mensagem deve ter pelo menos 10 caracteres" }
                  })}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-nature-brand text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-nature-brand/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>

            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
