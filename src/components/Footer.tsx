/** Rodapé do portfólio — fecha o tema arcade. */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-2 border-line px-[22px] py-[26px] text-center">
      <p className="font-pixel text-[8px] leading-[1.8] text-[#6b6488]">
        PEDRO.dev &nbsp;•&nbsp; GAME OVER? INSIRA OUTRA FICHA &nbsp;•&nbsp; {year}
      </p>
    </footer>
  )
}
