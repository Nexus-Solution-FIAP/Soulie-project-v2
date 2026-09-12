# 🌱 Soulie — Plataforma Gamificada de Sustentabilidade

<div align="center">

![Soulie Banner](https://img.shields.io/badge/Soulie-Sustentabilidade%20Gamificada-2563EB?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMSAyMEE3IDcgMCAwIDEgOS44IDYuMUMxNS41IDQuMiAyMCA3IDIwIDEzYTQgNCAwIDAgMS00IDRINGE0IDQgMCAwIDEtNC00Yy0yLjUgMC0zLjkgMS43LTQuOCA0IiAvPjxwYXRoIGQ9Ik0xMiAyMGwtMS0yIiAvPjwvc3ZnPg==&logoColor=white)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](LICENSE)

**Transforme ações sustentáveis do dia a dia em uma jornada de evolução.**
Cuide do seu Soulie, complete missões ecológicas, suba no ranking e faça a diferença! 🌍

[▶️ Vídeo de Demonstração no YouTube](https://youtube.com) • [🔗 Repositório no GitHub](https://github.com/Nexus-Solution-FIAP/Soulie-project-v2)

</div>

---

## 📖 Sobre o Projeto

O **Soulie** é uma plataforma web gamificada que incentiva a adoção de hábitos sustentáveis. Através de um avatar-planta interativo (o Soulie), missões diárias, sistema de XP e ranking comunitário, os usuários são motivados a manter ações ecológicas no dia a dia.

**Problema:** 81% das pessoas não conseguem manter hábitos ecológicos sem suporte constante.

**Solução:** Gamificação com vínculo emocional — seu Soulie evolui de sementinha a árvore conforme você realiza ações sustentáveis, e fica triste se for negligenciado.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | 19.2.8 | Biblioteca principal de UI |
| **TypeScript** | ~6.0.2 | Tipagem estática |
| **Vite** | 8.2.2 | Build tool & dev server |
| **Tailwind CSS** | 3.4.19 | Estilização utility-first |
| **React Router DOM** | 7.18.3 | Roteamento SPA (rotas estáticas e dinâmicas) |
| **React Hook Form** | 7.87.0 | Validação e gerenciamento de formulários |
| **Lucide React** | 1.41.0 | Biblioteca de ícones |

---

## 📁 Estrutura de Pastas

```
soulie/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Card.tsx        # Card genérico com variantes
│   │   ├── Footer.tsx      # Rodapé da aplicação
│   │   ├── Header.tsx      # Navegação principal (desktop + mobile)
│   │   ├── Layout.tsx      # Layout wrapper com scroll-to-top
│   │   └── Soulie.tsx      # 🌱 Avatar SVG interativo (5 estágios)
│   ├── context/            # Contextos React
│   │   └── SoulieContext.tsx # Estado global: XP, nível, humor, localStorage
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.tsx        # Landing page
│   │   ├── Dashboard.tsx   # Painel com missões, XP e avatar Soulie
│   │   ├── Jardim.tsx      # Ranking comunitário (Leaderboard)
│   │   ├── Sobre.tsx       # Sobre o projeto e gamificação
│   │   ├── Integrantes.tsx # Listagem da equipe
│   │   ├── IntegranteDetail.tsx # Perfil individual (rota dinâmica)
│   │   ├── FAQ.tsx         # Perguntas frequentes (accordion)
│   │   └── Contato.tsx     # Formulário de contato validado
│   ├── App.tsx             # Roteamento principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Diretivas Tailwind
├── tailwind.config.js      # Configuração Tailwind (cores, keyframes, animações)
├── vite.config.ts          # Configuração Vite
├── tsconfig.json           # Configuração TypeScript
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

---

## ✨ Funcionalidades Principais

### 🌱 Avatar Soulie Interativo
- 5 estágios de evolução: **Sementinha → Broto → Muda → Samambaia → Árvore**
- Expressões faciais dinâmicas (feliz, triste, murcho, animado)
- Animações suaves (float, bounce, droop, wilt)
- Renderizado em **SVG inline** com faces animadas

### 🎯 Sistema de Missões & XP
- Missões diárias categorizadas (reciclagem, água, energia, mobilidade, consumo)
- XP acumulado ao completar missões
- Level-up automático com animação de celebração
- Persistência em **localStorage**

### 🏆 Jardim Comunitário (Ranking)
- Leaderboard semanal com métricas de impacto
- Streaks de dias consecutivos
- Sistema de convites com link compartilhável

### 📝 Formulário de Contato Validado
- Validação com **React Hook Form**
- Campos obrigatórios: nome, e-mail, assunto, mensagem
- Validação por regex (e-mail) e `minLength`
- Feedback visual de erros e sucesso

### 🔀 Rotas Dinâmicas
- Rota `/integrante/:id` com **useParams** para perfil individual
- Navegação programática com **useNavigate** (formulário, botão voltar)
- 7 rotas estáticas + 1 rota dinâmica + página 404

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- **Node.js** v18 ou superior
- **npm** v9 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/soulie.git

# Entre na pasta do projeto
cd soulie

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em **http://localhost:5173**

### Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Dev | `npm run dev` | Servidor de desenvolvimento com HMR |
| Build | `npm run build` | Build de produção |
| Lint | `npm run lint` | Verificação de código com ESLint |
| Preview | `npm run preview` | Preview do build de produção |

---

## 🖥️ Demonstração

### Páginas do Projeto

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Landing page com estatísticas e frentes de impacto |
| `/dashboard` | Dashboard | Missões, avatar Soulie, XP e impacto semanal |
| `/jardim` | Jardim Comunitário | Ranking de impacto e convites |
| `/sobre` | Sobre | Problema, solução, gamificação e roadmap |
| `/integrantes` | Integrantes | Cards da equipe com link para perfil |
| `/integrante/:id` | Perfil Individual | Detalhes do membro (rota dinâmica) |
| `/faq` | FAQ | Perguntas frequentes com accordion |
| `/contato` | Contato | Formulário validado com redirecionamento |

---

## 👥 Autores

**Turmas 1TDSPY & 1TDSPV — FIAP (2026)**
Disciplina: Front-End Design Engineering

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|:---:|---|---|---|---|---|
| **LG** | Laura Albuquerque Gama | RM 571296 | 1TDSPY | [GitHub](https://github.com/Lagsystems) | [LinkedIn](https://www.linkedin.com/in/laura-albuquerque-gama-b83382357/) |
| **HC** | Hugo Leite Chimendes | RM 572104 | 1TDSPY | [GitHub](https://github.com/urgho) | [LinkedIn](https://www.linkedin.com/in/hugo-chimendes/) |
| **PO** | Pietro Santos de Oliveira | RM 572934 | 1TDSPV | [GitHub](https://github.com/PietroSantosOli) | [LinkedIn](https://www.linkedin.com/in/pietro-santos-586a2a30b/) |
| **NR** | Nathan Reis | RM 569520 | 1TDSPV | [GitHub](https://github.com/nathantoneto) | [LinkedIn](https://www.linkedin.com/in/nathan-toneto-a45946395/) |
| **AL** | Arthur Zambão Leite | RM 574150 | 1TDSPY | [GitHub](https://github.com/ArthurZambao) | [LinkedIn](https://www.linkedin.com/in/arthurzambao/) |

---

## 📬 Contato

- **E-mail:** soulie@soulup.com.br
- **Telefone:** +55 11 3385-8010
- **Formulário:** Acessível via rota `/contato` na aplicação

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com 💚 pelos Guardiões do Soulie — FIAP 2026

</div>
