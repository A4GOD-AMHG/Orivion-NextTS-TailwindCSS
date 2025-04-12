export default function Services() {
    return (
        <section className="container mx-auto py-20">
            <h2 className="text-4xl font-bold mb-16 text-center">Nuestros Pilares</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="border border-grey-space p-6 rounded-xl">
                        <h3 className="text-electric-blue text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-light-grey">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

const services = [
    {
        title: 'Growth de Marcas Personales',
        description: 'Construcción y escalamiento de tu marca personal con estrategias comprobadas.'
    },
    {
        title: 'Monetización de Comunidades',
        description: 'Transformamos tu comunidad en un activo rentable con sistemas probados.'
    },
    {
        title: 'Growth para Ecommerce',
        description: 'Optimización de ads, funnels y conversiones para escalar tus ventas.'
    }
]