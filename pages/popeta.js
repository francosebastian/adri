// import head component
import popeta1 from '../public/popeta/1.png'
import popeta2 from '../public/popeta/2.png'
import popeta3 from '../public/popeta/3.png'
import popeta4 from '../public/popeta/4.png'
import popeta5 from '../public/popeta/5.png'
import popeta6 from '../public/popeta/6.png'
import popeta7 from '../public/popeta/7.png'
import popeta8 from '../public/popeta/8.png'
import popeta9 from '../public/popeta/9.png'
import popeta10 from '../public/popeta/10.png'
import popeta11 from '../public/popeta/11.png'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function Popeta() {
  return (
    <>
      <div className="font-serif subpixel-antialiased">
        <div className="p-4 text-black bg-gray-200" >
          <div className=" px-6 py-6 flex-col">
            <h1 className="text-2xl">Parcelas Popeta, Santo Domingo</h1>
          </div>
          <div className="px-6 flex-col">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <Image src={popeta1} alt="Parcela Melipilla Popeta"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta2} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta3} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta4} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta5} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta6} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta7} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta8} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta9} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta10} alt="Parcela Melipilla Popeta" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={popeta11} alt="Parcela Melipilla Popeta" />
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
