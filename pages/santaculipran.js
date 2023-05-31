// import head component
import santaculipran1 from '../public/santaculipran/1.png'
import santaculipran2 from '../public/santaculipran/2.png'
import santaculipran3 from '../public/santaculipran/3.png'
import santaculipran4 from '../public/santaculipran/4.png'
import santaculipran5 from '../public/santaculipran/5.png'
import santaculipran6 from '../public/santaculipran/6.png'
import santaculipran7  from '../public/santaculipran/7.png'
import santaculipran8 from '../public/santaculipran/8.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function SantaCulipran() {
  return (
    <>
      <div className="font-serif subpixel-antialiased">
        <div className="p-4 text-black bg-gray-200" >
          <div className="px-6 py-6 flex-col">
            <h1 className="text-2xl">Proyecto Agua Santa, Valle de Culipran Melipilla</h1>
          </div>
          <div className="inset-x-0  px-6 flex-col">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <Image src={santaculipran1} alt="Parcela Agua Santa Culipran"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran2} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran3} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran4} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran5} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran6} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran7} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={santaculipran8} alt="Parcela Agua Santa Culipran" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-6 flex-col">
            <h2 className="py-6 text-xl">Caracteristicas</h2>
            <ul className="list-disc p-2 px-4">
              <li>Caminos Listos.</li>
              <li>Superficie: 5.000 M²</li>
              <li>Rol Propio.</li>
              <li>Con pendiente leve y plana</li>
              <li>Factibilidad de agua y luz</li>
              <li>Inscritas en el CBR de Melipilla</li>
              <li>A 20 min de Melipilla y 43 Min del Lago Rapel</li>
              <li>Bosque Nativo</li>
              <li>Financiamiento, Pie minimo $10.000.000 y plazo maximo 10 Años</li>
              <li>Ideal para vivienda.</li>
              <li>PRECIO DESDE: $50.000.000</li>
            </ul>
            <br/>
            <br/>
          </div>    
        </div>
      </div>
    </>
  );
}
