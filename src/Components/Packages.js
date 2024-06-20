

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, } from 'swiper/modules';





import goap from "../Components/Assets/goap.png"
import himpp from "../Components/Assets/himpp.png"
import kashp from "../Components/Assets/kashp.png"
import keralap from "../Components/Assets/keralap.png"
import northp from "../Components/Assets/northp.png"
import andp from "../Components/Assets/andp.png"
import rajp from "../Components/Assets/rajp.png"
import utrap from "../Components/Assets/utrap.png"



const Packages = () => {
    return (
        <div className='lg:pt-10' id='Packages'>
            <div style={{ fontFamily: "'Aeonik', sans-serif" }} className='lg:mt-20 mt-16' >
                <div className='my-5 text-center lg:text-[32px] text-2xl font-bold tracking-wider'>Top Packages</div>


                <div className='mt-10 flex flex-wrap justify-around mx-10 max-md:hidden'>
                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={goap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Goa</h1>
                            <p className='text-white font-semibold'>starting at ₹30,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={kashp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Kashhmir</h1>
                            <p className='text-white font-semibold'>starting at ₹27,100</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={himpp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Himachal</h1>
                            <p className='text-white font-semibold'>starting at ₹7,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={keralap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Kerala</h1>
                            <p className='text-white font-semibold'>starting at ₹17,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={northp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>North East</h1>
                            <p className='text-white font-semibold'>starting at ₹11,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={andp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Andaman</h1>
                            <p className='text-white font-semibold'>starting at ₹12,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={rajp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Rajasthan</h1>
                            <p className='text-white font-semibold'>starting at ₹17,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5'>
                        <img src={utrap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                        <div className='relative top-[-80px] left-2 '>
                            <h1 className='text-lg font-bold text-white'>Uttarakhand</h1>
                            <p className='text-white font-semibold'>starting at ₹8,800</p>
                            <p className='text-white font-semibold'>per person</p>
                        </div>
                    </div>
                </div>

                <div className='sm:hidden'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={goap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Goa</h1>
                                    <p className='text-white font-semibold'>starting at ₹30,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={kashp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Kashhmir</h1>
                                    <p className='text-white font-semibold'>starting at ₹27,100</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={himpp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Himachal</h1>
                                    <p className='text-white font-semibold'>starting at ₹7,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={keralap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Kerala</h1>
                                    <p className='text-white font-semibold'>starting at ₹17,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={northp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>North East</h1>
                                    <p className='text-white font-semibold'>starting at ₹11,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={andp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Andaman</h1>
                                    <p className='text-white font-semibold'>starting at ₹12,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={rajp} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Rajasthan</h1>
                                    <p className='text-white font-semibold'>starting at ₹17,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-[300px] h-[200px] rounded-lg cursor-pointer mt-5 mb-16 mx-auto'>
                                <img src={utrap} alt='goa' className='w-[300px] h-[200px] rounded-lg brightness-75 hover:brightness-100' />
                                <div className='relative top-[-80px] left-2 '>
                                    <h1 className='text-lg font-bold text-white'>Uttarakhand</h1>
                                    <p className='text-white font-semibold'>starting at ₹8,800</p>
                                    <p className='text-white font-semibold'>per person</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Packages