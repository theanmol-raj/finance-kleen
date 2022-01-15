import React from 'react'
import ListIcon from '@mui/icons-material/List';
import UserDropDown from '../SubComponent/UserDropDown';

function Navbar({sidebar,side}) {

    return (
        <div className=' flex fixed bg-white z-50 w-screen  flex-col md:flex-row'>
            <div className=' md:w-72 py-3 flex flex-row bg-red-500 text-white font-semibold '> 
            <p className=' w-full text-2xl pl-6 text-left'>Brand</p>
            <p className=' block md:hidden'><ListIcon fontSize='inherit' /></p>
            </div>
            <div className=' flex border-b border-gray-400 flex-row justify-between w-full pl-4 pr-8 items-center '>
                <div className=''>
                <button onClick={() => {sidebar(prev => !prev)}} className={` ${side ? 'text-red-500' : ''} text-2xl hover:text-gray700 `}><ListIcon fontSize='inherit' /></button>
                </div>
                <div className=' flex justify-center items-center lg:   space-x-2 flex-row'>
                    <UserDropDown  user={`Anmol`} />
                </div>
            </div>
           
        </div>
    )
}

export default Navbar
