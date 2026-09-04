import { SiteHeader } from '@/components/site-header'
import { ServiceCard } from '@/components/service-card'

const services = [
  {
    title: 'Reparo de computadores e notebooks',
    description:
      'Manutenção completa, troca de peças, limpeza e otimização para o seu computador ou notebook voltar a funcionar como novo.',
    image: '/images/reparo-computador.png',
    imageAlt: 'Técnico realizando manutenção em um computador aberto',
  },
  {
    title: 'Reparo de aparelhos celulares',
    description:
      'Troca de tela, bateria, conectores e reparos em placas. Cuidamos do seu celular com precisão e agilidade.',
    image: '/images/reparo-celular.png',
    imageAlt: 'Técnico realizando manutenção em um celular desmontado',
  },
  {
    title: 'Softwares e Sistemas',
    description:
      'Desenvolvimento de sistemas, instalação e configuração de softwares sob medida para o seu negócio.',
    image: '/images/softwares-sistemas.png',
    imageAlt: 'Técnico programando em um notebook com códigos na tela',
  },
]

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col">
      <SiteHeader />

      <section className="grid flex-1 gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        {'© '}
        {new Date().getFullYear()} STARNET Informática. Todos os direitos reservados.
      </footer>
    </main>
  )
}
