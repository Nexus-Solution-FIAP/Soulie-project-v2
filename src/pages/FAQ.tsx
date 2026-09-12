import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../components/Card';
import { FAQ_ITEMS } from '../constants/faq';

export function FAQ() {
  
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs = FAQ_ITEMS;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <header className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-nature-brand" />
          Central de Ajuda
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre o uso da plataforma 
          e como funcionam as mecânicas de evolução.
        </p>
      </header>

      <Card variant="brand">
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="border border-nature-border rounded-lg overflow-hidden bg-nature-bg/50 transition-all duration-300"
              >
                
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none focus:bg-nature-surface hover:bg-nature-surface transition-colors text-left"
                  aria-expanded={isOpen}
                  aria-controls={`content-${faq.id}`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-nature-brand tracking-wider uppercase">
                      {faq.category}
                    </span>
                    <span className={`text-base font-semibold ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-nature-brand" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                <div 
                  id={`content-${faq.id}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 py-4 opacity-100 border-t border-nature-border/50' : 'max-h-0 py-0 opacity-0'
                  }`}
                  role="region"
                  aria-labelledby={`header-${faq.id}`}
                >
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-nature-border text-center">
          <p className="text-gray-400 mb-4">
            Ainda tem dúvidas ou não encontrou o que procurava?
          </p>
          <a 
            href="/contato" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-nature-surface border border-nature-border text-white hover:text-nature-brand hover:border-nature-brand transition-colors"
          >
            Fale com o Suporte
          </a>
        </div>
      </Card>
      
    </div>
  );
}
