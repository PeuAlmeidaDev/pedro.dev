/**
 * Botão flutuante de WhatsApp — CTA de contato rápido (público BR).
 *
 * Abre o wa.me em nova aba com mensagem pré-preenchida. Mesmo tratamento
 * pixelado da MusicCoin, com a animação de levitar (sobe e desce), empilhado
 * logo acima dela no canto inferior direito.
 *
 * ⚠️ Expõe um número pessoal publicamente — trocar por WhatsApp Business /
 * número dedicado se virar alvo de spam.
 */

const PHONE = '5571999858360' // 55 (BR) + 71 (DDD) + número
const MESSAGE = 'Olá Pedro! Vi seu portfólio e gostaria de conversar.'
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

export default function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="group fixed bottom-[84px] right-5 z-50 h-14 w-14 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
    >
      <span className="relative flex h-full w-full animate-floaty2 items-center justify-center rounded-full border-[3px] border-[#0c5b46] bg-[radial-gradient(circle_at_35%_28%,#4ae187,#25d366_46%,#0f9d58_100%)] shadow-[0_4px_0_#0c5b46,0_0_18px_rgba(37,211,102,.45)] motion-reduce:animate-none">
        {/* anel interno claro — combina com a moeda */}
        <span className="pointer-events-none absolute inset-[3px] rounded-full border border-white/40" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="#ffffff" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.1 1.6 5.88L2 22l4.34-1.14a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-2.57.67.69-2.5-.2-.32a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.25 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.77-1.83-.2-.48-.4-.42-.55-.43h-.47z" />
        </svg>
      </span>
    </a>
  )
}
