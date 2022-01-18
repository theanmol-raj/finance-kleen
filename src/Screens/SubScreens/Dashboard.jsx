import React, { useEffect, useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Course({st}) {

    const Data =[{title: 'Total Subscription', val :{ a:'52,125' , b:'48.4%'} , ico:{a:<PersonAddIcon /> , val: 0}},
                 {title: 'Order Status', val :{ a:'45,415' , b:'11.4%'} , ico:{a:<ShoppingCartIcon /> , val: 0}},
                 {title: 'Monthly Earnings', val :{ a:'52,453,48' , b:'+2.4%'} , ico:{a:<PermIdentityIcon /> , val: 1}}]



    const Card = ({item}) => (<div className={`shadow-lg justify-between py-4 px-4 lg:my-6 rounded-xl bg-gray-900 flex flex-row ${item.y === 0 ? ' text-blue-400' : ''} ${item.y === 1 ? ' text-yellow-400' : ''} ${item.y === 2 ? ' text-purple-500' : ''}`}>
        <div >
            <p>{item.x.title}</p>
            <p>{item.x.ico.a}</p>
        </div>
        <div>
            <p className=' text-right'>{item.x.val.a}</p>
            <p>{item.x.val.b}<span className={` text-xl -mt-1 ${item.x.ico.val ? ' text-green-500' : ' text-red-600'}`}><ArrowCircleUpIcon fontSize='inherit' /></span></p>
        </div>
    </div>)
    







    return (
        <div className='  h-screen bg-indigo-50 w-full'>
            <hr className=' pt-12' />
            <div className=' ml-8  '>
                <div>
                <p className=' capitalize customtextcolor font-semibold text-3xl'>Dashboard</p>
                <p className='capitalize text-gray-400 my-3 text-lg '>Compare to last month</p>
                <div className=' flex w-full flex-col mr-8 lg:mr-0 lg:flex-row'>
                <div className=' grid  grid-cols-2 lg:w-4/6 gap-5 lg:grid-cols-3'>
                 {Data.map((x,y)=> <Card key={y} item={{x,y}} />)}

                </div>
                <div className='py-4 w-full mt-8 lg:mt-6  px-4 lg:my-6 lg:w-2/6 shadow-2xl rounded-xl bg-gray-900 lg:mx-8 '>
                    <p className=' text-center w-full text-red-500'>Monthly Earning</p>
                    <div className=' flex flex-row w-full justify-between pt-4'>
                        <div>
                            <p className=' text-white text-xl'>3654</p> <p className=' text-gray-400'>Market Place</p>
                        </div>
                        <div>
                            <p className=' text-white text-xl'>954</p> <p className=' text-gray-400'>Last Week </p>
                        </div>
                        <div>
                            <p className=' text-white text-xl'>8464</p> <p className=' text-gray-400'>Last Month</p>
                        </div>

                    </div>
                </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Course


