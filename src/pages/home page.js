import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from '../components/navbar';
import Sign from '../components/buttons/signInButton';

import lady from '../assets/lady.png';
import next from '../assets/next.png';



function Home() {
    return (
        <div className='h-screen overflow-hidden'>
            <Nav />
            <div className='flex bg-zinc-800 '>
                <div className='flex-none p-4 pr-6 mt-12 text-white'>
                    <h1 className='font-bold text-4xl'>
                        Welcome to<br />
                        Rina's Import
                    </h1>
                    <h2 className='pt-4 text-2xl'>
                        LANDING PAGE
                    </h2>
                    <NavLink to="/signin" className='pt-4 mt-16'>
                        <Sign />
                    </NavLink>
                    <div>
                        <img
                            src={next}
                            alt=''
                            className='h-12 mt-16 '
                        />
                    </div>
                </div>
                <div>
                    <img
                        src={lady}
                        alt=''
                        className='object-contain h-full w-full d'
                    />
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
export default Home;