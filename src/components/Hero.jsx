import React from 'react'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Hero = () => {
    return (
        <>
            <div className='flex flex-col text-white gap-3 justify-center items-center h-[39rem] bg-gray-500'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white text-4xl'>We are <span className='bg-orange-600 px-1'>No.1 Industrial Service</span></h1>
                    <h1 className='text-white text-4xl ml-10'> Providers in Worldwide!</h1>
                </div>
                <p className='text-xs'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, ehoncus ut, imperdiet a, <br />
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                <div className='flex gap-2 text-xs text-white'>
                    <button className='px-5 py-2 bg-blue-900 text-white'>READ MORE</button>
                    <button className='px-5 py-2 bg-orange-600'>Our Solutions</button>
                </div>
            </div>
        </>
    )
}

export default Hero
