import React, { useState, useEffect } from 'react';

function Sidebar() {

    const [fadeIn, setFadeIn] = useState(false);

        useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeIn(true);
        }, 500);

        return () => clearTimeout(timeout);
        }, []);

    return(
        <div className={`flex-col flex items-center p-14 transform transition-opacity duration-1000 z-0 ${
            fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <SideLetter letter='H'/>
        <SideLetter letter='E'/>
        <SideLetter letter='L'/>
        <SideLetter letter='L'/>
        <SideLetter letter='O'/>
      </div>
    );
}   

const SideLetter = ({letter}) => (
    <i className='text-black my-10 font-mainFont font-bold text-lg mr-3'>{letter}</i>
);
export default Sidebar;