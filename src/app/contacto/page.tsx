import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Contacto() {
    return(
        <main className="min-h-screen pt-20 bg-gray-50"> {/* Ajuste para el Navbar fijo */}

            {/* 1. HEADER DE CONTACTO */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        Hablemos de tu Próximo Proyecto
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nuestro equipo experto en inversión inmobiliaria está listo para asesorarte. Contáctanos por el medio que prefieras.
                    </p>
                </div>
            </section>

            {/* 2. CONTENIDO PRINCIPAL: Formulario e Información */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* COLUMNA 1 & 2: FORMULARIO DE CONTACTO */}
                    <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                            Envíanos un Mensaje Directo
                        </h2>

                        {/* El formulario necesitará un manejador de estado (useState) y una función de envío (handleSubmit) real */}
                        <form className="space-y-6">
                            {/* Nombre Completo */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Ej: Juan Pérez"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>

                            {/* Motivo de Contacto (Opcional) */}
                            <div>
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                                    Motivo de Contacto
                                </label>
                                <select
                                    id="reason"
                                    name="reason"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                >
                                    <option value="">Selecciona un motivo...</option>
                                    <option value="compra">Quiero Comprar una Parcela/Terreno</option>
                                    <option value="venta">Quiero Vender mi Propiedad</option>
                                    <option value="asesoria">Asesoría General/Legal</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Tu Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="Describe tu consulta o proyecto..."
                                />
                            </div>

                            {/* Botón de Enviar */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-green-500 hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* COLUMNA 3: INFORMACIÓN DE CONTACTO */}
                    <div className="md:col-span-1 space-y-8 p-6 bg-gray-800 rounded-xl text-white">
                        <h2 className="text-2xl font-bold mb-4 text-green-400">
                            Información de Contacto
                        </h2>

                        {/* Teléfono */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <PhoneIcon className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-semibold">Llámanos</h3>
                            </div>
                            <Link
                                href="tel:+56964947609" // Reemplaza con tu número real
                                className="text-gray-300 hover:text-white transition"
                            >
                                +56 9 6494 7609
                            </Link>
                        </div>

                        {/* Correo */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-semibold">Escríbenos</h3>
                            </div>
                            <Link
                                href="mailto:terrenosmeli@gmail.com"
                                className="text-gray-300 hover:text-white transition"
                            >
                                terrenosmeli@gmail.com
                            </Link>
                        </div>

                        {/* Dirección / Ubicación de Servicio */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <MapPinIcon className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-semibold">Área de Servicio</h3>
                            </div>
                            <p className="text-gray-300">
                                Región Metropolitana y Central de Chile.
                                <br />
                                (Atención presencial previa cita)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}