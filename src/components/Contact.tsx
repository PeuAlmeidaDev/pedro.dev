import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { Social } from '../types'
import { socials } from '../data/socials'
import SectionHeading from './SectionHeading'

interface FormState {
  name: string
  email: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', message: '' }

/**
 * Seção "Contato" (#contact) — FINAL STAGE.
 * Formulário em estilo terminal + links sociais.
 *
 * ⚠️ Envio ainda NÃO conectado a um provedor: o submit valida e mostra a
 * confirmação, mas não entrega a mensagem. Ligar Formspree/Web3Forms/backend.
 */
export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: enviar de verdade (provedor a definir). Por ora só confirma na UI.
    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setForm(EMPTY)
  }

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-[22px] pt-20 pb-[60px]">
      <SectionHeading number="05" title="FINAL STAGE" accent="cyan" />

      <div className="grid items-start gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {/* terminal */}
        <div className="overflow-hidden border-[3px] border-[#1f5e4a] bg-[#07100e] shadow-[0_0_0_3px_#0b0813,0_0_30px_rgba(52,211,153,.18)]">
          <div className="flex items-center gap-2 border-b-2 border-[#1f5e4a] bg-[#0c1f17] px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 bg-[#fb7185]" />
            <span className="h-2.5 w-2.5 bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 bg-[#34d399]" />
            <span className="ml-2 font-mono text-[17px] text-[#34d399]">contact_terminal.exe</span>
          </div>

          <div className="p-[22px]">
            {sent ? (
              <div className="px-2.5 py-[30px] text-center">
                <p className="mb-3.5 font-pixel text-[13px] text-[#34d399] [text-shadow:0_0_12px_rgba(52,211,153,.5)]">
                  ✓ MENSAGEM ENVIADA
                </p>
                <p className="mb-[22px] font-mono text-[20px] text-[#7dd3b0]">
                  &gt; transmissão concluída. retorno em breve, player.
                </p>
                <button
                  onClick={reset}
                  className="border-2 border-[#a7f3d0] bg-[#34d399] px-4 py-3 font-pixel text-[9px] text-[#07100e] shadow-[0_4px_0_#1f5e4a] transition-transform active:translate-y-1 active:shadow-none"
                >
                  NOVA MENSAGEM
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <TerminalField label="> nome:" value={form.name} onChange={update('name')} placeholder="seu_nome" />
                <TerminalField
                  label="> email:"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="seu@email.com"
                />
                <label className="mb-1.5 block font-mono text-[19px] text-[#34d399]">&gt; mensagem:</label>
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="digite sua mensagem..."
                  rows={4}
                  className="mb-[18px] w-full resize-y border-2 border-[#1f5e4a] bg-[#0c1f17] px-3 py-2.5 font-mono text-[19px] text-[#d1fae5] outline-none focus:border-[#34d399] focus:shadow-[0_0_10px_rgba(52,211,153,.3)]"
                />
                <button
                  type="submit"
                  className="w-full border-[3px] border-[#a7f3d0] bg-[#34d399] p-[15px] font-pixel text-[11px] text-[#07100e] shadow-[0_5px_0_#1f5e4a,0_0_20px_rgba(52,211,153,.35)] transition-transform active:translate-y-[5px]"
                >
                  ▶ ENVIAR MENSAGEM
                </button>
              </form>
            )}
          </div>
        </div>

        {/* socials */}
        <div className="flex flex-col gap-3.5">
          <div className="border-[3px] border-edge bg-[linear-gradient(180deg,#1b1430,#131019)] p-6 shadow-[0_0_0_3px_#0b0813]">
            <p className="mb-2 font-pixel text-[10px] text-violet">▸ LINKS DE PARTY</p>
            <p className="mb-[18px] font-body text-sm text-ink-dim">
              Bora formar uma party? Me chama em qualquer canal.
            </p>
            <div className="flex flex-col gap-[11px]">
              {socials.map((so) => (
                <SocialRow key={so.label} social={so} />
              ))}
            </div>
          </div>

          <div className="border-[3px] border-edge bg-[linear-gradient(180deg,#1b1430,#131019)] p-[22px] text-center shadow-[0_0_0_3px_#0b0813]">
            <p className="mb-2.5 font-pixel text-[11px] text-gold [text-shadow:0_0_12px_rgba(251,191,36,.4)]">
              ★ THANKS FOR PLAYING
            </p>
            <p className="font-mono text-[20px] text-ink-dim">&gt; você chegou ao fim da fase.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
}) {
  return (
    <>
      <label className="mb-1.5 block font-mono text-[19px] text-[#34d399]">{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mb-4 w-full border-2 border-[#1f5e4a] bg-[#0c1f17] px-3 py-2.5 font-mono text-[19px] text-[#d1fae5] outline-none focus:border-[#34d399] focus:shadow-[0_0_10px_rgba(52,211,153,.3)]"
      />
    </>
  )
}

function SocialRow({ social }: { social: Social }) {
  const color = `var(--color-${social.color})`
  const base = 'flex items-center justify-between gap-3 border-2 border-edge bg-[#0e0a18] px-4 py-[15px]'

  const inner = (
    <>
      <span className="font-pixel text-[10px]" style={{ color }}>
        {social.label}
      </span>
      <span className="font-body text-sm text-ink-soft">{social.handle}</span>
    </>
  )

  if (social.disabled) {
    return (
      <div className={`${base} cursor-not-allowed opacity-45`} aria-disabled="true" title="Em breve">
        {inner}
      </div>
    )
  }

  const external = social.href.startsWith('http')
  return (
    <a
      href={social.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} no-underline transition-transform hover:translate-x-1.5 hover:border-[var(--sc)]`}
      style={{ ['--sc' as string]: color }}
    >
      {inner}
    </a>
  )
}
