import Card from "../Components/card";
import Link from "next/link";
import convento from '../public/convento/4.png'
import popeta from '../public/popeta/10.png'
import culipran from '../public/culipran/5.png'
import santaculipran from '../public/santaculipran/3.png'

import Head from 'next/head'

export default function App() {
  return (
    <>
    <Head>
        <title>Adri Gestion Inmobiliaria</title>
        <meta name='description' content='Venta de parcelas region metropolitana melipilla'/>
    </Head>
      <div className="flex">
        <div className="px-6 py-6 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
          <h1>Parcelas en venta</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="px-6 py-6">
          <Link href={`/convento`}>
            <Card imgSrc={convento} title="Parcela El Yali, Santo Domingo 5000 M²" description={"Precio: $35.000.000"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/popeta`}>
            <Card imgSrc={popeta} title="Parcela Popeta, Melipilla 5000M²" description={"Precio: 6500UF"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card imgSrc={culipran} title="Parcela Culipran Agricola, Melipilla 10000M²" description={"Precio: $142.000.000"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/santaculipran`}>
            <Card imgSrc={santaculipran} title="Parcelas Culipran , Melipilla 50000M²" description={"Precio: 1260UF"} />
          </Link>
        </div>
      </div>
    </>
  );
}
