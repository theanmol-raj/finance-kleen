import React, { useState } from 'react'
import Dashboard from '../Screens/SubScreens/Dashboard'
import Transaction from '../Screens/SubScreens/Transaction'
import Sales from '../Screens/SubScreens/Sales';
import Refunds from '../Screens/SubScreens/Refunds'
import Billing from '../Screens/SubScreens/Billing'
import Report from '../Screens/SubScreens/Reports';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CachedIcon from '@mui/icons-material/Cached';
import BarChartIcon from '@mui/icons-material/BarChart';
import PreviewIcon from '@mui/icons-material/Preview';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssessmentIcon from '@mui/icons-material/Assessment';







function Screen({side}) {
    const[renderScreen,SetrenderScreen] = useState(0)

    const OptionArray =[{name:"Dashboard" ,icon: <DashboardIcon fontSize='inherit'  />},
    {name:"Transaction " ,icon: <CachedIcon fontSize='inherit'  />},{name:"Sales" ,icon: <BarChartIcon fontSize='inherit' />},{name:"Refunds" ,icon: <PreviewIcon fontSize='inherit' />},{name:"Billing" ,icon: <FactCheckIcon fontSize='inherit'  />},{name:"Report" ,icon:<AssessmentIcon fontSize='inherit'  /> }]
    
    
    
    const ScreenArray =[<Dashboard  />,<Transaction />,<Sales /> ,<Refunds /> ,<Billing />,<Report />];



    function Options(){
        return (<div className='flex flex-col w-full'>
            {OptionArray.map((x,y)=> <button key={y} onClick={()=>{SetrenderScreen(y)}} className={` ${renderScreen === y ? ' text-white' : 'text-gray-500'} whitespace-nowrap w-full hover:text-gray-400  font-medium border-b border-gray-800 text-left py-3 `}><span className={` ${renderScreen === y ? ' text-red-500' : ''} pl-5 text-xl pr-3`}>{x.icon}</span>{x.name}</button>)}
        </div>)
    }
    return (
        <div className='flex flex-row  bg-black h-full '>
            <div className={` ${side? ' md:w-72' : ' w-0'} py-2 transform transition-width duration-500 ease-out flex flex-row sidebar  font-semibold `}> 
            {side && <Options  />}
            </div>
            <div className={` ${side? ' ' : ' ml-0'} py-2 flex w-full flex-row bg-gray-300  font-semibold `}> 
                    { ScreenArray[renderScreen]}
            </div>
            
        </div>
    )
}

export default Screen
