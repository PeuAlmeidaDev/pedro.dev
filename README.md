# Pedro.dev — Portfólio

Portfólio pessoal em estilo **RPG retro / cyberpunk**: skills, projetos como _quests_ e
a carreira como uma _jornada de fases_. Divertido na superfície, sólido por baixo — rápido,
acessível e achável no Google.

🔗 **Ao vivo:** _em breve_

## Stack

- **[Vite](https://vite.dev/)** — build e dev server
- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** (strict)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — tema retro via tokens CSS
- **[Vitest](https://vitest.dev/)** — testes
- **[Web3Forms](https://web3forms.com/)** — envio do formulário de contato (sem backend)

## Seções

`Início` · `Sobre` · `Skills` · `Quests` (projetos) · `Jornada` (experiência) · `Contato`

## Rodando localmente

```bash
npm install
npm run dev
```

O formulário de contato usa o [Web3Forms](https://web3forms.com/). Para o envio funcionar,
copie `.env.example` para `.env` e preencha sua access key:

```bash
cp .env.example .env
# edite .env e defina VITE_WEB3FORMS_ACCESS_KEY
```

## Scripts

| Comando           | O que faz                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento (Vite) |
| `npm run build`   | Type-check + build de produção            |
| `npm run preview` | Servir o build localmente                 |
| `npm run lint`    | ESLint                                    |
| `npm run test`    | Suíte de testes (Vitest)                  |

## Estrutura

```
src/
  components/   # componentes de UI (um por arquivo, finos)
  data/         # conteúdo tipado: skills, projetos, experiências…
  hooks/        # lógica reutilizável (scroll spy…)
  lib/          # regras puras e adaptadores (validação, envio do form)
  theme/        # provider de tema (RETRO/MODERN)
public/
  assets/       # imagens e mídia
```

## Build & deploy

Site estático — `npm run build` gera a pasta `dist/`, publicável em qualquer host estático
(Vercel, Netlify, GitHub Pages).
