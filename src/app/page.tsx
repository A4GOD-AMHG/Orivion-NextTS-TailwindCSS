export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 mt-20">
                <h1 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                        Growth Real
                    </span><br />
                    Para Quienes Buscan Resultados
                </h1>
                <p className="text-xl text-light-grey mb-8">
                    No prometemos humo. Ejecutamos lo que funciona.
                </p>
                <button className="bg-electric-blue text-black-cosmic px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition">
                    Comenzar Ahora
                </button>
            </main>
        </div>
    )
}