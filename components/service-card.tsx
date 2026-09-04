import Image from 'next/image'
import { WhatsappIcon } from './whatsapp-icon'

const WHATSAPP_URL = 'https://wa.me/5511952327083?text=Bom%20dia'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
}

export function ServiceCard({ title, description, image, imageAlt }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide text-card-foreground text-balance">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <WhatsappIcon className="size-5" />
          Falar no WhatsApp
        </a>
      </div>
    </article>
  )
}
