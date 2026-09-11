import type { TeamMember } from '../types/integrantes';

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'laura-gama', name: 'Laura Albuquerque Gama', role: 'BD & Engenharia de Soft.', rm: 'RM 571296', github: 'https://github.com/Lagsystems', linkedin: 'https://www.linkedin.com/in/laura-albuquerque-gama-b83382357/', avatarPlaceholder: 'LG', photo: '/laura.jpeg' },
  { id: 'hugo-chimendes', name: 'Hugo Leite Chimendes', role: 'Java & Engenharia de Soft.', rm: 'RM 572104', github: 'https://github.com/urgho', linkedin: 'https://www.linkedin.com/in/hugo-chimendes/', avatarPlaceholder: 'HC', photo: '/hugo.jpeg' },
  { id: 'pietro-oliveira', name: 'Pietro Santos de Oliveira', role: 'Python & Engenharia de Soft.', rm: 'RM 572934', github: 'https://github.com/PietroSantosOli', linkedin: 'https://www.linkedin.com/in/pietro-santos-586a2a30b/', avatarPlaceholder: 'PO', photo: '/pietro.jpeg' },
  { id: 'nathan-reis', name: 'Nathan Reis', role: 'IA & Engenharia de Soft.', rm: 'RM 569520', github: 'https://github.com/nathantoneto', linkedin: 'https://www.linkedin.com/in/nathan-toneto-a45946395/', avatarPlaceholder: 'NR', photo: '/ntc.jpeg' },
  { id: 'arthur-leite', name: 'Arthur Zambão Leite', role: 'Front & Engenharia de Soft.', rm: 'RM 574150', github: 'https://github.com/ArthurZambao', linkedin: 'https://www.linkedin.com/in/arthurzambao/', avatarPlaceholder: 'AL', photo: '/arthur.jpeg' },
];

export const ROADMAP = [
  { phase: 'Fase 1', title: 'Pesquisa & Discovery', date: 'Fev 2026', status: 'completed' },
  { phase: 'Fase 2', title: 'Design System & Prototipagem', date: 'Mar 2026', status: 'completed' },
  { phase: 'Fase 3', title: 'MVP Frontend (Sprint 03)', date: 'Abr-Mai 2026', status: 'current' },
  { phase: 'Fase 4', title: 'Backend & Integrações (Sprint 04)', date: 'Jun 2026', status: 'pending' },
  { phase: 'Fase 5', title: 'Launch & Escala', date: 'Jul 2026', status: 'pending' },
] as const;
