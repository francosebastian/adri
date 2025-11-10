import Image from 'next/image';
import { MapPinIcon, TagIcon, CheckIcon, HomeIcon, LinkIcon } from '@heroicons/react/24/outline';
import proyectosData from '@/data/proyectos.json'; // Asegúrate de ajustar la ruta
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Definición de la interfaz
interface Proyecto {
    id: string;
    title: string;
    location: string;
    priceFrom: string;
    descriptionShort: string;
    descriptionLong: string;
    features: string[];
    images: string[];
    status: string;
}

// Función para obtener todos los IDs y generar las rutas estáticas (Para Next.js App Router)
export async function generateStaticParams() {
    return proyectosData.map((proyecto) => ({
        id: proyecto.id,
    }));
}

// Función para obtener un proyecto por ID
const getProyectoById = (id: string): Proyecto | undefined => {
    return proyectosData.find(p => p.id === id) as Proyecto;
};

type Props = {
    params: Promise<{ id: string }>;
};

// Componente principal de la página de detalle
export default async function ProyectoDetallePage(props: Props) {
    const params = await props.params;
    const proyecto =  getProyectoById(params.id);

    if (!proyecto) {
        notFound(); // Muestra la página 404 de Next.js
    }

    // Clase condicional para el badge de estado
    const statusClass = proyecto.status === 'Preventa'
        ? 'bg-yellow-500 text-yellow-900'
        : 'bg-green-500 text-white';

    return (
        <main className="min-h-screen pt-24 bg-white">
            <div className="container mx-auto px-4 py-12">

                {/* TÍTULO Y ESTADO */}
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-4xl font-extrabold text-gray-800">{proyecto.title}</h1>
                    <span className={`px-4 py-2 text-sm font-bold rounded-full ${statusClass}`}>
                        {proyecto.status}
                    </span>
                </div>

                {/* IMÁGENES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    <div className="relative h-96 lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={proyecto.images[0]} // Imagen principal grande
                            alt={`Principal de ${proyecto.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                    </div>
                    {/* Imágenes secundarias */}
                    {proyecto.images.slice(1).map((img, index) => (
                        <div key={index} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={img}
                                alt={`Vista ${index + 2} de ${proyecto.title}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>

                {/* DETALLES Y CONTACTO */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Columna de Información */}
                    <div className="lg:col-span-2">
                        {/* Precio y Ubicación */}
                        <div className="flex items-center gap-6 mb-6 pb-4 border-b">
                            <p className="text-3xl font-extrabold text-green-600 flex items-center">
                                <TagIcon className="w-7 h-7 mr-2" /> {proyecto.priceFrom}
                            </p>
                            <p className="text-lg text-gray-600 flex items-center">
                                <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" /> {proyecto.location}
                            </p>
                        </div>

                        {/* Descripción Larga */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Detalles del Proyecto</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">{proyecto.descriptionLong}</p>

                        {/* Características/Highlights */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Características Clave</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-gray-700">
                            {proyecto.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna de Contacto Flotante */}
                    <div className="lg:col-span-1 p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200 sticky top-28 h-fit">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">
                            ¿Te Interesa este Proyecto?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Agenda una visita o solicita más información detallada.
                        </p>

                        <Link
                            href="/contacto"
                            className="w-full inline-flex justify-center items-center gap-2 py-3 mb-4 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600 transition"
                        >
                            <LinkIcon className="w-5 h-5" />
                            Contactar Ahora
                        </Link>

                        <Link
                            href="/proyectos"
                            className="w-full inline-flex justify-center items-center gap-2 py-3 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                        >
                            <HomeIcon className="w-5 h-5" />
                            Volver al Listado
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}