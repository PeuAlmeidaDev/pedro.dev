import { describe, it, expect, vi, afterEach } from 'vitest'
import { sendContact } from './sendContact'

const input = { name: 'Pedro', email: 'pedro@example.com', message: 'mensagem de teste' }

afterEach(() => {
  vi.restoreAllMocks()
})

describe('sendContact', () => {
  it('faz POST com access_key e os campos do formulário', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ success: true }), { status: 200 }))

    await sendContact(input, 'KEY-123')

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://api.web3forms.com/submit')
    expect(init?.method).toBe('POST')
    const body = JSON.parse(init?.body as string)
    expect(body).toMatchObject({ access_key: 'KEY-123', ...input })
  })

  it('retorna ok=true quando a API responde success=true', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    )

    expect(await sendContact(input, 'KEY-123')).toEqual({ ok: true })
  })

  it('retorna ok=false quando a API responde success=false', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: false, message: 'rejeitado' }), { status: 200 }),
    )

    const result = await sendContact(input, 'KEY-123')
    expect(result.ok).toBe(false)
  })

  it('retorna ok=false quando o fetch lança (rede offline)', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network down'))

    const result = await sendContact(input, 'KEY-123')
    expect(result.ok).toBe(false)
  })
})
