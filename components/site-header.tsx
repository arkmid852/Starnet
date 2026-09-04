import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="relative flex flex-col items-center px-6 pt-14 pb-10 text-center md:pt-20 md:pb-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="relative flex size-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-black shadow-xl md:size-36">
        <Image
          src="/images/logo.jpg"
          alt="Logo da STARNET Informática"
          width={144}
          height={144}
          priority
          className="size-full object-contain"
        />
      </div>

      <h1 className="relative mt-6 font-display text-4xl font-bold uppercase tracking-[0.15em] text-foreground md:text-6xl">
        STARNET <span className="text-primary">Informática</span>
      </h1>

      <p className="relative mt-4 max-w-xl text-base text-muted-foreground text-pretty md:text-lg">
        A melhor escolha para cuidar de suas conquistas
      </p>
    </header>
  )
}
