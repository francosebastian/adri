import proyectosData from '@/data/proyectos.json';
import ProyectoCard from "@/components/PropertyCard";

// Definición de la interfaz para tipado (Buena práctica en TypeScript)
interface Proyecto {
    id: string;
    title: string;
    location: string;
    priceFrom: string;
    descriptionShort: string;
    images: string[];
    status: string;
}

const fetchProyectos = async (): Promise<Proyecto[]> => {
    return proyectosData as Proyecto[];
};


export default async function ProyectosPage() {
    const proyectos = await fetchProyectos();

    return (
        <main className="min-h-screen pt-24 bg-gray-50">

            {/* Header de la página */}
            <header className="py-12 bg-white border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        Explora Nuestros Proyectos Inmobiliarios
                    </h1>
                    <p className="text-lg text-gray-600">
                        Tu oportunidad de inversión en las mejores ubicaciones de la zona central.
                    </p>
                </div>
            </header>

            {/* Listado de Proyectos */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {proyectos.length === 0 ? (
                        <p className="text-center text-xl text-gray-600">No hay proyectos disponibles en este momento.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {proyectos.map((proyecto) => (
                                <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}