// import head component
import convento1 from '../public/convento/1.png'
import convento2 from '../public/convento/2.png'
import convento3 from '../public/convento/3.png'
import convento4 from '../public/convento/4.png'
import convento5 from '../public/convento/5.png'
import convento6 from '../public/convento/6.png'
import convento7  from '../public/convento/7.png'
import convento8 from '../public/convento/8.png'
import laguna from '../public/convento/laguna.png'
import rio from '../public/convento/rio.png'
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
      <div className="font-serif subpixel-antialiased">
        <div className="p-4 text-black bg-gray-200" >
          <div className="px-6 py-6 flex-col">
            <h1 className="text-2xl">Proyecto Estero el Yali, Santo Domingo</h1>
          </div>
          <div className="inset-x-0  px-6 flex-col">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <Image src={convento1} alt="Parcela Santo domingo"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento2} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento3} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento4} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento5} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento6} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento7} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={convento8} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={laguna} alt="Parcela Santo domingo" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={rio} alt="Parcela Santo domingo" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-6 flex-col">
            <h2 className="py-6 text-xl">Caracteristicas</h2>
            <ul className="list-disc p-2 px-4">
              <li>Con acceso a Estero El Yali</li>
              <li>Caminos listo</li>
              <li>Superficie: 5.000 M²</li>
              <li>Portón privado solo para residentes</li>
              <li>Rol Propio.</li>
              <li>Factibilidad de agua y luz (panel solar)</li>
              <li>Crédito directo</li>
              <li>Entorno totalmente natural</li>
              <li>Con embarcadero para estero</li>
              <li>Apto para Kayak y botes sin motor</li>
              <li>A 20 min. de Santo Domingo</li>
              <li>Ideal para vivienda.</li>
            </ul>
            <h2 className="py-6 text-xl">Naturaleza</h2>
            <p>Zona con 18 cuerpos o cursos de agua distribuidos en el territorio, entre lagunas, esteros, ríos, embalses y desembocaduras</p>
            <br/>
            <p>A 5 min de Reserva Nacional El Yali, con acceso a la playa. El Yali es uno de 56 sitios de la estrategia regional para la Conservación de la Biodiversidad</p>
            <br/>
            <br/>
          </div>    
        </div>
      </div>
    </>
  );
}
