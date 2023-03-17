import adri_logo from '../public/adri.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className="fixed z-40 inset-x-0 bottom-0 bg-stone-900  px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center mx-auto justify-between ">
        <Image src={adri_logo} alt="Adri Gestion Inmobiliaria" className="logo-img-footer" />
        <div className="font-mono fonts text-l  text-neutral-50">
          <h2>Adri Gestion Inmobiliaria</h2>
        </div>
        <div id="telefono" className="font-mono text-l text-neutral-50">
          <h2>+56964947609</h2>
        </div>
      </div>

    </div>
  );
}