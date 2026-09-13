export interface FAQItem {
  id: string;
  category: 'Geral' | 'Gamificação' | 'Missões' | 'Comunidade' | 'Dados';
  question: string;
  answer: string;
}
