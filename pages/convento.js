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
          <div className=" px-6 py-6 flex-col">
            <h1 className="text-2xl">Parcelas Estero el Yali, Santo Domingo</h1>
          </div>
          <div className="px-6 flex-col">
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
            <ul className="list-disc p-4 px-6">
              <li>Sector: Agua Santa</li>
              <li>5.000 m²</li>
              <li>Rol propio</li>
              <li>Factibilidad de agua y luz</li>
              <li>A 20 min de Melipila</li>
              <li>Crédito directo</li>
              <li>Pie desde $10.000.000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
