'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // --- LÓGICA DEL LIGHTBOX (MODAL) ---

    // Función para obtener el índice de la imagen actualmente seleccionada
    const selectedImageIndex = images.findIndex((img) => img === selectedImage);

    // Función para cerrar el Lightbox
    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
    }, []);

    // Función para navegar a la imagen anterior
    const goToPrevious = useCallback(() => {
        if (selectedImageIndex > 0) {
            setSelectedImage(images[selectedImageIndex - 1]);
        } else {
            // Opcional: Ir a la última imagen si se está en la primera
            setSelectedImage(images[images.length - 1]);
        }
    }, [selectedImageIndex, images]);

    // Función para navegar a la imagen siguiente
    const goToNext = useCallback(() => {
        if (selectedImageIndex < images.length - 1) {
            setSelectedImage(images[selectedImageIndex + 1]);
        } else {
            // Opcional: Ir a la primera imagen si se está en la última
            setSelectedImage(images[0]);
        }
    }, [selectedImageIndex, images]);

    // 🔑 Hook para manejar eventos de teclado (ESC y navegación)
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!selectedImage) return; // Solo actuar si el lightbox está abierto

            switch (event.key) {
                case 'Escape':
                    // 1. Cerrar con la tecla ESC
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    // 2. Navegar a la izquierda
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    // 3. Navegar a la derecha
                    goToNext();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage, closeLightbox, goToPrevious, goToNext]);


    // Componente Lightbox que incluye la lógica de zoom
    const Lightbox = ({ image, closeLightbox, goToPrevious, goToNext, canGoPrevious, canGoNext, title }: {
        image: string;
        closeLightbox: () => void;
        goToPrevious: () => void;
        goToNext: () => void;
        canGoPrevious: boolean;
        canGoNext: boolean;
        title: string;
    }) => {
        const [isZoomed, setIsZoomed] = useState(false);

        // 4. Lógica de Zoom con Doble Click
        const toggleZoom = () => {
            setIsZoomed(prev => !prev);
        };

        // Resetea el zoom al cambiar de imagen
        useEffect(() => {
            setIsZoomed(false);
        }, [image]);


        return (
            <div
                className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300"
                // 1. Cerrar al hacer clic fuera
                onClick={closeLightbox}
            >
                {/* Contenedor de la Imagen y Controles */}
                <div
                    className="relative max-w-7xl max-h-[90vh] w-full h-full p-12"
                    // Evita que el clic se propague al div principal (para no cerrar al hacer clic dentro)
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Botón de Cerrar */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition z-50"
                        aria-label="Cerrar Imagen"
                    >
                        <XMarkIcon className="w-8 h-8" />
                    </button>

                    {/* Controles de Navegación (Flechas) */}
                    <button
                        onClick={goToPrevious}
                        disabled={!canGoPrevious}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-white rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition z-40 disabled:opacity-30 disabled:cursor-not-allowed`}
                        aria-label="Imagen Anterior"
                    >
                        <ChevronLeftIcon className="w-8 h-8" />
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={!canGoNext}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-white rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition z-40 disabled:opacity-30 disabled:cursor-not-allowed`}
                        aria-label="Imagen Siguiente"
                    >
                        <ChevronRightIcon className="w-8 h-8" />
                    </button>

                    {/* Imagen Grande con Zoom */}
                    <div
                        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
                            isZoomed ? 'scale-[1.5]' : '' // Aplicar el zoom si es necesario
                        }`}
                        // 4. Manejador de Doble Click
                        onDoubleClick={toggleZoom}
                        style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in', transformOrigin: 'center center' }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        );
    };

    // --- RENDERIZADO PRINCIPAL ---
    return (
        <>
            {/* GRID DE IMÁGENES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01] cursor-pointer ${
                            index === 0 ? 'h-96 lg:col-span-2' : 'h-48'
                        }`}
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`Vista ${index + 1} de ${title}`}
                            fill
                            className="object-cover"
                            sizes={
                                index === 0
                                    ? '(max-width: 1024px) 100vw, 66vw'
                                    : '(max-width: 1024px) 50vw, 33vw'
                            }
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Ver</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL / LIGHTBOX */}
            {selectedImage && (
                <Lightbox
                    image={selectedImage}
                    closeLightbox={closeLightbox}
                    goToPrevious={goToPrevious}
                    goToNext={goToNext}
                    canGoPrevious={selectedImageIndex > 0} // Puedes cambiar esto si quieres que sea cíclico
                    canGoNext={selectedImageIndex < images.length - 1} // Puedes cambiar esto si quieres que sea cíclico
                    title={title}
                />
            )}
        </>
    );
}