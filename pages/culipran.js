// import head component
import Head from 'next/head'
import culipran1 from '../public/culipran/1.png'
import culipran2 from '../public/culipran/2.png'
import culipran3 from '../public/culipran/3.png'
import culipran4 from '../public/culipran/4.png'
import culipran5 from '../public/culipran/5.png'
import culipran6 from '../public/culipran/6.png'
import culipran7 from '../public/culipran/7.png'
import culipran8 from '../public/culipran/8.png'
import culipran9 from '../public/culipran/9.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function Culipran() {
    return (
        <>
            <Head>
                <title>Parcela Culipran Melipilla</title>
                <meta name='description' content='Proyecto Parcelas Culipran Melipilla' />
            </Head>
            <div className="font-serif subpixel-antialiased">
                <div className="p-4 text-black bg-gray-200" >
                    <div className=" px-6 py-6 flex-col">
                        <h1 className="text-2xl">Parcela Culipran 10.000² Melipilla Región Metropolitana</h1>
                    </div>
                    <div className="px-6 flex-col">
                        <Swiper navigation={true} modules={[Navigation]}>
                            <SwiperSlide>
                                <Image src={culipran1} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran2} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran3} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran4} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran6} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran7} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran8} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={culipran9} alt="Parcela Melipilla Culipran" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="px-6 flex-col">
                        <ul className="list-disc p-4 px-6">
                            <li>Con derechos de agua.</li>
                            <li>Con canal de regadío. </li>
                            <li>Superficie: 10.000 m² 100% plana</li>
                            <li>Rol propio</li>
                            <li>Ideal para cultivo agrícola o vivienda</li>
                            <li>Crédito Directo</li>
                            <li>A 15 min de Melipilla</li>
                            <li>Colegios, centros de salud y comercio cerca</li>
                            <li>Fácil acceso, caminos listos</li>
                            <li>Facilidades de pago</li>
                            <li>Factibilidad de luz real, por empalme</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
