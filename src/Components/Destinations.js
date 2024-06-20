import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';




import laksha from "../Components/Assets/lakshadweep.png"
import leh from "../Components/Assets/leh.png"
import goa from "../Components/Assets/goa.png"
import manali from "../Components/Assets/manali.png"
import gok from "../Components/Assets/gok.png"
import srinagar from "../Components/Assets/srinagar.png"
import pondy from "../Components/Assets/pondy.png"
import varkala from "../Components/Assets/varkala.png"
import ooty from "../Components/Assets/ooty.png"
import and from "../Components/Assets/and.png"
import allepey from "../Components/Assets/allepey.png"
import coorg from "../Components/Assets/coorg.png"

const Destinations = () => {
    return (
        <div className='lg:pt-5' id='OurDestination'>
            <div style={{ fontFamily: "'Aeonik', sans-serif" }} className='mt-4 ' >
                <div className='my-5 text-center lg:text-[32px] text-2xl font-bold'>Top Destinations</div>

                <div className='flex flex-wrap justify-around mx-10 mb-10 max-md:hidden'>
                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={laksha} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Lakshadweep</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={leh} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Leh</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={goa} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Goa</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={manali} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Manali</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={gok} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Gokarna</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={srinagar} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Srinagar</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={pondy} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Pondicherry</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={varkala} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Varkala</p>
                    </div>


                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={ooty} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Ooty</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={and} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Havelock Island</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={allepey} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Alleyppey</p>
                    </div>

                    <div className='w-[300px] h-[200px] mt-5'>
                        <img src={coorg} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                        <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Coorg</p>
                    </div>
                </div>

                <div className='sm:hidden '>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16  mx-auto'>
                                <img src={laksha} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Lakshadweep</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={leh} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Leh</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={goa} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Goa</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={manali} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Manali</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={gok} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Gokarna</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={srinagar} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Srinagar</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={pondy} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Pondicherry</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={varkala} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Varkala</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16  mx-auto'>
                                <img src={ooty} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Ooty</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={and} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Havelock Island</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={allepey} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Alleyppey</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] mt-5 mb-16 mx-auto'>
                                <img src={coorg} alt='lakshwadeep' className="w-[300px] h-[200px] rounded-lg cursor-pointer brightness-75 hover:brightness-100" />
                                <p className='relative  text-center top-[-115px] cursor-pointer text-white text-[24px] font-bold  '>Coorg</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>



            </div>
        </div>
    )
}

export default Destinations