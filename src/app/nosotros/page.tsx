import Image from 'next/image';
import { CheckBadgeIcon, ChartBarIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Componente para las métricas clave
// @ts-expect-error ignora errores
const StatCard = ({ icon: Icon, value, label }) => (
    <div className="text-center p-6 bg-gray-100 rounded-lg">
        <Icon className="w-10 h-10 mx-auto text-green-500 mb-3" />
        <p className="text-4xl font-extrabold text-gray-800">{value}</p>
        <p className="text-sm text-gray-600 uppercase tracking-wider">{label}</p>
    </div>
);

export default function Nosotros() {
    return (
        <main className="min-h-screen pt-20"> {/* Ajuste para el Navbar fijo */}

            {/* 1. HEADER Y BANNER DE INTRODUCCIÓN */}
            <section className="relative h-[40vh] bg-gray-800 flex items-center">
                {/* Placeholder para una imagen de fondo o color */}
                <Image
                    src="/rio-pescado/8.jpg" // Asegúrate de tener una imagen en /public/about-us-bg.jpg
                    alt="Oficina o equipo de Adri Gestión Inmobiliaria"
                    fill
                    className="object-cover opacity-30"
                    priority
                    sizes="100vw"
                />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-2">
                        Quiénes Somos en <span className="text-green-400">Adri Gestión Inmobiliaria</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Tu socio confiable en el mercado inmobiliario desde 2021.
                    </p>
                </div>
            </section>

            {/* 2. HISTORIA, MISIÓN Y VISIÓN */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Contenido de texto */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
                            Nuestra Historia y Compromiso
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Adri Gestión Inmobiliaria nació en <strong>2021</strong> con la visión de transformar la manera en que las personas invierten en terrenos y propiedades en la zona central de Chile. Identificamos la necesidad de un servicio más transparente, personalizado y enfocado en la <strong>plusvalía real</strong> para nuestros clientes.
                        </p>

                        <h3 className="text-2xl font-semibold text-green-600 mb-3">
                            Misión
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Garantizar a nuestros clientes las mejores oportunidades de inversión inmobiliaria a través de una asesoría experta y procesos de compra/venta totalmente transparentes y seguros.
                        </p>

                        <h3 className="text-2xl font-semibold text-green-600 mb-3">
                            Visión
                        </h3>
                        <p className="text-gray-700">
                            Ser la inmobiliaria líder y referente en la gestión de parcelas de agrado y terrenos de inversión en la Región Metropolitana y regiones aledañas.
                        </p>

                        <Link
                            href="/contacto"
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-green-500 transition"
                        >
                            <ShieldCheckIcon className="w-5 h-5" />
                            Trabaja con Confianza
                        </Link>
                    </div>

                    {/* Imagen lateral */}
                    <div className="relative h-96 rounded-xl shadow-2xl overflow-hidden hidden md:block">
                        <Image
                            src="/adri.jpeg" // Asegúrate de tener una imagen en /public/trust-image.jpg
                            alt="Mano estrechándose o vista de una parcela"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>

            {/* 3. MÉTRICAS CLAVE (Generando Confianza) */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Nuestros Números Hablan por Sí Mismos
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard
                            icon={MapPinIcon}
                            value="35+"
                            label="Proyectos Entregados"
                        />
                        <StatCard
                            icon={CheckBadgeIcon}
                            value="100%"
                            label="Documentación Revisada"
                        />
                        <StatCard
                            icon={ChartBarIcon}
                            value="2021"
                            label="Fundación de la Empresa"
                        />
                        <StatCard
                            icon={ChartBarIcon}
                            value="24/7"
                            label="Soporte y Asesoría"
                        />
                    </div>
                </div>
            </section>

            {/* 4. LLAMADA A LA ACCIÓN (Conectar al Home CTA) */}
            <section className="bg-gray-800 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        ¿Tienes dudas o quieres invertir?
                    </h2>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center px-8 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-xl hover:bg-green-600 transition"
                    >
                        Contacta a un Experto Ahora
                    </Link>
                </div>
            </section>

        </main>
    );
}