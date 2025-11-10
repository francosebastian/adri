import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon, BuildingOffice2Icon, HomeModernIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';
import PropertyCard from "@/components/PropertyCard";
import proyectosData from '@/data/proyectos.json';


interface Proyecto {
    id: string;
    title: string;
    location: string;
    priceFrom: string;
    descriptionShort: string;
    images: string[];
    status: string;
}

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500 text-center">
        <Icon className="w-10 h-10 mx-auto text-green-500 mb-4" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const fetchProyectos = async (): Promise<Proyecto[]> => {
    return proyectosData as Proyecto[];
};



export default async function Home() {

    const proyectos = await fetchProyectos();
    return (
        <main className="min-h-screen pt-20"> {/* pt-20 para compensar el fixed Navbar */}

            {/* 1. SECCIÓN HERO (Banner principal) */}
            <section className="relative h-[60vh] md:h-[80vh] bg-gray-900 flex items-center justify-center">
                {/* Imagen de fondo (asegúrate de tener una imagen impactante en /public/hero-bg.jpg) */}
                <Image
                    src="/rio-pescado/5.jpg"
                    alt="Fondo de paisaje inmobiliario"
                    fill
                    className="object-cover opacity-50"
                    priority
                    sizes="100vw"
                />

                {/* Contenido centrado */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                        Tu Próxima <span className="text-green-400">Inversión Inmobiliaria</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Encuentra las mejores parcelas y proyectos en la Región Metropolitana y Central.
                    </p>`

                    <div className="flex justify-center gap-4">
                        <Link
                            href="/proyectos"
                            className="px-8 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-xl hover:bg-green-600 transition transform hover:scale-105"
                        >
                            Ver Proyectos Destacados
                        </Link>
                        <Link
                            href="/contacto"
                            className="px-8 py-3 bg-white text-gray-800 text-lg font-bold rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. SECCIÓN DE PROPIEDADES DESTACADAS */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        🏡 Propiedades <span className="text-green-500">Exclusivas</span>
                    </h2>
                    <p className="text-gray-600 mb-12">
                        Explora una selección de nuestros mejores proyectos y oportunidades de inversión.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {proyectos.map(property => (
                            // eslint-disable-next-line react/jsx-key
                            <PropertyCard  key={property.id} proyecto={property}  />
                        ))}
                    </div>

                    <Link
                        href="/proyectos"
                        className="mt-12 inline-flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-50 transition"
                    >
                        Ver todas las propiedades
                    </Link>
                </div>
            </section>

            {/* 3. SECCIÓN DE CONFIANZA / NOSOTROS */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            ¿Por qué elegir <span className="text-green-500">Adri Gestión Inmobiliaria</span>?
                        </h2>
                        <p className="text-gray-600 mt-3">
                            Nuestro compromiso es simple: tu inversión en las mejores manos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={SparklesIcon}
                            title="Experiencia"
                            description="Años de experiencia en la gestión y venta de terrenos en la zona central."
                        />
                        <FeatureCard
                            icon={BuildingOffice2Icon}
                            title="Transparencia Total"
                            description="Procesos claros y documentación legal revisada al 100%."
                        />
                        <FeatureCard
                            icon={HomeModernIcon}
                            title="Proyectos Seleccionados"
                            description="Solo ofrecemos propiedades con alto potencial de plusvalía."
                        />
                        <FeatureCard
                            icon={UserGroupIcon}
                            title="Asesoría Personalizada"
                            description="Te acompañamos en cada paso del proceso de compra o venta."
                        />
                    </div>
                </div>
            </section>

            {/* 4. LLAMADA A LA ACCIÓN FINAL */}
            <section className="bg-green-500 py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2">
                            ¿Listo para Empezar a Invertir?
                        </h2>
                        <p className="text-lg opacity-90">
                            Hablemos de tus objetivos. Un experto te contactará en minutos.
                        </p>
                    </div>

                    <Link
                        href="/contacto"
                        className="flex items-center gap-2 px-8 py-3 bg-white text-green-500 text-lg font-bold rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
                    >
                        <PhoneIcon className="w-6 h-6" />
                        Solicitar Asesoría Ahora
                    </Link>
                </div>
            </section>

        </main>
    );
}