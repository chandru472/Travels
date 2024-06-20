import React from 'react'
import kashr from "../Components/Assets/kashr.png"
import andr from "../Components/Assets/andr.png"
import goar from "../Components/Assets/goar.png"
import ladr from "../Components/Assets/ladr.png"
import keralar from "../Components/Assets/keralar.png"
import northr from "../Components/Assets/northr.png"


const Attractions = () => {
    return (
        <div style={{ fontFamily: "'Aeonik', sans-serif" }} className='lg:mt-20 mt-16 mb-20 '>
            <div className='my-5 text-center lg:text-[32px] text-2xl font-bold lg:tracking-wider'>Top Attractions in India</div>

            <div className=' flex justify-evenly flex-wrap max-md:hidden'>
                <div className='flex w-[380px]  items-center mt-10 '>
                    <img src={kashr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Kashmir</h1>
                        <p className='text-[14px]'>Kashmir Tour Packages , Kashmir Tourism,</p>
                        <p className='text-[14px]'>Kashmir Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[380px] items-center  mt-10'>
                    <img src={andr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Andaman</h1>
                        <p className='text-[14px]'>Andaman Tour Packages , Andaman Tourism,</p>
                        <p className='text-[14px]'>Andaman Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[380px] items-center  mt-10'>
                    <img src={goar} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Goa</h1>
                        <p className='text-[14px]'>Goa Tour Packages , Goa Tourism,</p>
                        <p className='text-[14px]'>Goa Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[380px] items-center  mt-10'>
                    <img src={ladr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Ladakh</h1>
                        <p className='text-[14px]'>Ladakh Tour Packages , Kashmir Tourism,</p>
                        <p className='text-[14px]'>Ladakh Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[380px] items-center  mt-10'>
                    <img src={keralar} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Kerala</h1>
                        <p className='text-[14px]'>Kerala Tour Packages , Kashmir Tourism,</p>
                        <p className='text-[14px]'>Kerala Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[380px] items-center  mt-10'>
                    <img src={northr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>North East</h1>
                        <p className='text-[14px]'>North East Tour Packages , North East Tourism,</p>
                        <p className='text-[14px]'>North East Honeymoon Packages</p>
                    </div>

                </div>
            </div>

{/* small */}
            <div className=' flex justify-center flex-wrap sm:hidden'>
                <div className='flex w-[300px]  items-center mt-10'>
                    <img src={kashr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Kashmir</h1>
                        <p className='text-[14px]'>Kashmir Tour Packages</p>
                        <p className='text-[14px]'>Kashmir Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[300px] items-center  mt-10'>
                    <img src={andr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Andaman</h1>
                        <p className='text-[14px]'>Andaman Tour Packages</p>
                        <p className='text-[14px]'>Andaman Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[300px] items-center  mt-10'>
                    <img src={goar} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Goa</h1>
                        <p className='text-[14px]'>Goa Tour Packages</p>
                        <p className='text-[14px]'>Goa Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[300px] items-center  mt-10'>
                    <img src={ladr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Ladakh</h1>
                        <p className='text-[14px]'>Ladakh Tour Packages</p>
                        <p className='text-[14px]'>Ladakh Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[300px] items-center  mt-10'>
                    <img src={keralar} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>Kerala</h1>
                        <p className='text-[14px]'>Kerala Tour Packages</p>
                        <p className='text-[14px]'>Kerala Honeymoon Packages</p>
                    </div>

                </div>

                <div className='flex w-[300px] items-center  mt-10'>
                    <img src={northr} alt='pic' className='rounded-full mr-2' />
                    <div>
                        <h1 className='text-lg font-bold'>North East</h1>
                        <p className='text-[14px]'>North East Tour Packages</p>
                        <p className='text-[14px]'>North East Honeymoon Packages</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Attractions