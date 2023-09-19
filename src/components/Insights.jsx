import React from 'react'
import InSide from './InSide'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Contributors from './Contributors';

function Insights() {
  const id = useParams();

  return (
    <>
        <div className='flex h-auto flex-wrap'>
            <InSide/>
            {/* <h1 className='text-white'>{id.cId}</h1> */}
            <div className='lg:basis-3/5 md:flex-1 xs:flex-1 sm:flex-1  mt-4 ml-10 mr-10'>
            {id.cId === 1 ? <></> : <Contributors id_p={id.cId}/>}
            </div>
        </div>
        
    </>
  )
}

export default Insights