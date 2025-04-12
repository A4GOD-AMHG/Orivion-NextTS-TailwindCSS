import Link from 'next/link'

export default function Home() {
    const sections = [
        {
            title: 'Sobre Nosotros',
            content: 'Pioneros en soluciones innovadoras de Growth Marketing y AI',
            path: '/about-us'
        },
        {
            title: 'Nuestro Equipo',
            content: 'Expertos multidisciplinarios en tecnología y marketing digital',
            path: '/team'
        },
        {
            title: 'Servicios',
            content: 'Soluciones personalizadas de automatización y análisis predictivo',
            path: '/services'
        },
        {
            title: 'Políticas',
            content: 'Comprometidos con la transparencia y seguridad de tus datos',
            path: '/privacy-policy'
        },
        {
            title: 'Términos',
            content: 'Conoce los términos de nuestro servicio y colaboración',
            path: '/terms'
        },
        {
            title: 'Contáctanos',
            content: 'Contáctanos para colaborar contigo',
            path: '/contact-u'
        }
    ]

    return (
        <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-space-grotesk bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent mb-6">
                Revoluciona tu Growth con IA
            </h1>
            <p className="text-xl text-space-gray dark:text-light-gray mb-12">
                Soluciones integradas de marketing y automatización inteligente
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                    <Link
                        key={index}
                        href={section.path}
                        className="p-6 rounded-xl bg-pure-white dark:bg-space-gray shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl text-electric-blue mb-3">{section.title}</h3>
                        <p className="text-light-gray dark:text-light-gray/80">
                            {section.content}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    )
}