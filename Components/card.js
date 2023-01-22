import Image from "next/image"

export default function Card({ title, description, imgSrc }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image src={imgSrc} alt="Adri Gestion Inmobiliaria" width={500} height={500} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                   {description}
                </p>
            </div>
        </div>
    );
}