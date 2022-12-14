// import head component
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
      <div className="font-serif subpixel-antialiased">
        <div className="p-4 text-black bg-gray-200" >
          <div className=" px-6 py-6 flex-col">
            <h1 className="text-2xl">Parcelas Estero el Yali, Santo Domingo</h1>
          </div>
          <div className="px-6 flex-col">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <Image src={culipran1} alt="Parcela Melipilla"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran2} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran3} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran4} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran5} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran6} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran7} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran8} alt="Parcela San antonio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={culipran9} alt="Parcela San antonio" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-6 flex-col">
            <ul className="list-disc p-4 px-6">
              <li>Sector: Agua Santa</li>
              <li>5.000 m??</li>
              <li>Rol propio</li>
              <li>Factibilidad de agua y luz</li>
              <li>A 20 min de Melipila</li>
              <li>Cr??dito directo</li>
              <li>Pie desde $10.000.000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
