
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='flex flex-col font-sans'>
                <div className='flex p-3 ml-5 mt-2 bg-blue-950 text-sm text-white justify-center gap-80 '>
                    <div className='flex flex-row gap-5'>
                        <p>1-800-123-45678</p> |
                        <p>support@domain.com</p>

                    </div>
                    <div>
                        <p>Working hours - Mon - Fri: 8:30 - 18:30 | </p>
                    </div>
                </div>
                <div className='flex p-5 pl-80 text-xs gap-96'>
                    <h1 className='text-base font-bold'>PATRAI</h1>
                    <div className='flex gap-4 p-2 text-xs'>
                        <h1>HOME</h1>
                        <h1>ABOUT</h1>
                        <h1>SERVICES</h1>
                        <h1>PROJECTS</h1>
                        <h1>BLOG</h1>
                        <h1>PAGES</h1>
                        <h1>CONTACT</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
