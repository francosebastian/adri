import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Añadido PhoneIcon
import Image from 'next/image';

export default function Footer() {
    return (
        // El fondo ahora es un gris oscuro más neutro y elegante
        <footer className="mt-20 border-t bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                {/* Contenedor principal con grid para 3 columnas en MD y superior */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Columna 1: Logo y Eslogan */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png" // Asegúrate de que esta ruta sea correcta
                                    alt="Adri Gestion Inmobiliaria"
                                    fill
                                    className="object-contain rounded-full"
                                    priority
                                />
                            </div>
                            <h3 className="font-bold text-lg text-white">Adri Gestión Inmobiliaria</h3>
                        </div>
                        <p className="text-sm">
                            Desde 2021 — Tu Inversión en las mejores manos.
                            <br />
                            Especialistas en la gestión de tu patrimonio inmobiliario.
                        </p>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white text-base border-b border-gray-700 pb-2">Contáctanos</h4>
                        <a
                            href="mailto:terrenosmeli@gmail.com"
                            className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
                        >
                            <EnvelopeIcon className="h-5 w-5" />
                            terrenosmeli@gmail.com
                        </a>
                        {/* Se puede añadir un teléfono si lo tienes */}
                        {/* <a
                            href="tel:+56912345678"
                            className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            +56 9 1234 5678
                        </a> */}
                    </div>

                    {/* Columna 3: Redes Sociales */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white text-base border-b border-gray-700 pb-2">Síguenos</h4>
                        <div className="flex gap-6">
                            {/* Instagram SVG (mismo que el original) */}
                            <a
                                href="https://www.instagram.com/adri_parcelas"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition-colors" // Usando green-400 para un toque de color
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                                </svg>
                            </a>

                            {/* Facebook SVG (mismo que el original) */}
                            <a
                                href="https://www.facebook.com/p/Melipilla-Athletic-Club-61550758160348/" // Revisa este enlace si quieres cambiarlo
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <hr className="my-8 border-gray-700" />

                {/* Derechos de autor (parte inferior) */}
                <div className="text-center text-sm">
                    © {new Date().getFullYear()} **Adri Gestión Inmobiliaria**. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}