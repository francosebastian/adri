import {MapPinIcon, TagIcon} from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';

interface Proyecto {
    id: string;
    title: string;
    location: string;
    priceFrom: string;
    descriptionShort: string;
    images: string[];
    status: string;
}

export default function PropertyCard ({ proyecto }: { proyecto: Proyecto }) {
    // Clase condicional para el badge de estado
    const statusClass = proyecto.status === 'Preventa'
        ? 'bg-yellow-100 text-yellow-800'
        : 'bg-green-100 text-green-800';

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-56">
                <Image
                    src={proyecto.images[0]} // Usamos la primera imagen como miniatura
                    alt={`Imagen de ${proyecto.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${statusClass}`}>
                    {proyecto.status}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">{proyecto.title}</h2>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span>{proyecto.location}</span>
                </div>

                <p className="text-gray-600 mb-4 flex-grow">{proyecto.descriptionShort}</p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <p className="font-extrabold text-xl text-green-600">
                        <TagIcon className="w-5 h-5 inline-block mr-1 text-green-500" />
                        {proyecto.priceFrom}
                    </p>
                    <Link
                        href={`/proyectos/${proyecto.id}`}
                        className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-800 text-white hover:bg-green-600 transition"
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
};
