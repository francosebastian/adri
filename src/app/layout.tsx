import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type {ReactNode} from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';

export const metadata = {
    title: 'Adri Gestión Inmobiliaria – Venta, Arriendo y Administración en Melipilla',
    description:
        'Sitio oficial de Adri Gestión Inmobiliaria. Encuentra tu próxima propiedad, gestiona arriendos y administra tus bienes raíces con profesionales en Melipilla y alrededores.',
    keywords: ['inmobiliaria', 'Melipilla', 'venta', 'arriendo', 'administración', 'propiedades', 'bienes raíces', 'asesoría'],
    openGraph: {
        title: 'Adri Gestión Inmobiliaria 🏠',
        description:
            'Tu aliado en bienes raíces en Melipilla. Venta, arriendo y administración de propiedades de forma profesional y segura.',
        url: 'https://adri.cl',
        siteName: 'Adri Gestión Inmobiliaria',
        images: [
            {
                url: 'https://adri.cl/logo.png',
                width: 1200,
                height: 630,
                alt: 'Adri Gestión Inmobiliaria - Logo',
            },
        ],
        locale: 'es_CL',
        type: 'website',
    },
};
// Configura la fuente para titulares
const headingFont = Bebas_Neue({
    subsets: ['latin'],
    weight: '400', // Bebas Neue solo tiene un peso
    variable: '--font-heading', // Crea una variable CSS
});

// Configura la fuente para el cuerpo de texto
const bodyFont = Montserrat({
    subsets: ['latin'],
    variable: '--font-body', // Crea una variable CSS
});

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="es" className={`${headingFont.variable} ${bodyFont.variable}`}>
        {/* Aplicamos flex, flex-col y min-h-screen al body */}
        <body className="flex flex-col min-h-screen">
        <Navbar/>
        {/* Eliminamos el min-h-[70vh] y aplicamos flex-grow para que ocupe el espacio disponible */}
        <main className="flex-grow">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
