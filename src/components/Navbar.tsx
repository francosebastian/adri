'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        // Fondo blanco con un ligero blur y sombra
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 flex items-center justify-between h-20">

                {/* Logo + nombre */}
                <Link href="/" className="flex items-center gap-3">
                    {/* AQUI HEMOS CAMBIADO EL TAMAÑO DEL LOGO */}
                    <div className="relative w-24 h-24"> {/* Cambiado de w-12 h-12 a w-16 h-16 */}
                        <Image
                            src="/logo.png"
                            alt="Logo Adri Gestion Inmobiliaria"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* El texto ahora es gris oscuro */}
                    <span className="text-base md:text-lg font-bold text-gray-800 tracking-tight">
                        Adri Gestión Inmobiliaria
                    </span>
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-gray-700">
                    {/* El hover cambia a verde como color de acento */}
                    <Link href="/" className="hover:text-green-500 transition">Inicio</Link>
                    <Link href="/nosotros" className="hover:text-green-500 transition">Nosotros</Link>
                    <Link href="/proyectos" className="hover:text-green-500 transition">Proyectos</Link>
                    {/* Botón de Contacto destacado, por ejemplo */}
                    <Link
                        href="/contacto"
                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition shadow-md"
                    >
                        Contacto
                    </Link>
                </nav>

                {/* Botón menú móvil */}
                <button
                    aria-label="Abrir menú"
                    onClick={() => setOpen(!open)}
                    // Botón con color de acento
                    className="md:hidden p-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-100 transition"
                >
                    {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Menú móvil desplegable */}
            <div
                className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                }`}
            >
                {/* Links del menú móvil */}
                <div className="px-6 flex flex-col gap-3 text-base font-medium text-gray-700">
                    <Link href="/" onClick={() => setOpen(false)} className="block py-2 hover:text-green-500 transition border-b border-gray-100">Inicio</Link>
                    <Link href="/nosotros" onClick={() => setOpen(false)} className="block py-2 hover:text-green-500 transition border-b border-gray-100">Nosotros</Link>
                    <Link href="/proyectos" onClick={() => setOpen(false)} className="block py-2 hover:text-green-500 transition border-b border-gray-100">Proyectos</Link>
                    {/* El link de Contacto es el último y sin borde */}
                    <Link
                        href="/contacto"
                        onClick={() => setOpen(false)}
                        className="block py-2 text-green-500 font-bold hover:text-green-600 transition"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </header>
    );
}