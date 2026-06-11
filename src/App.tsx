/**
 * App raiz — placeholder da Fase 0.
 * Serve só para confirmar visualmente que o setup (Vite + React + TS +
 * Tailwind v4 + tokens de tema + fontes pixel) está funcionando.
 * Será substituído pelas seções reais a partir da Fase 3.
 */
export default function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6 text-center">
      <div>
        <p className="mb-4 font-pixel text-xs tracking-widest text-cyan">
          SETUP OK · FASE 0
        </p>
        <h1 className="font-pixel text-2xl leading-relaxed text-violet sm:text-3xl">
          PEDRO<span className="text-cyan">.dev</span>
        </h1>
        <p className="mt-6 font-body text-ink-dim">
          Vite + React + TypeScript + Tailwind v4 prontos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            ['bg-violet', 'violet'],
            ['bg-cyan', 'cyan'],
            ['bg-pink', 'pink'],
            ['bg-gold', 'gold'],
            ['bg-emerald', 'emerald'],
          ].map(([cls, name]) => (
            <span
              key={name}
              className={`${cls} h-8 w-8 border-2 border-line`}
              title={name}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
