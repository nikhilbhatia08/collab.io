import React from 'react'

function InSide() {
  return (
    <div className='flex-col self-start lg:basis-1/4 md:flex-1 sm:flex-1 mx-10 mt-4 bg-slate-800 border rounded-md'>
        <div className='my-3 border-b'>
            <h1 className="text-xl text-white mx-3">Contributors</h1>
        </div>
        <div className='my-3 text-white border-b'>
            <h1 className="text-xl text-white mx-3">Sponsors</h1>
        </div>
        <div className='my-3 border-b'>
            <h1 className="text-xl text-white mx-3">Traffic</h1>
        </div>
        <div className='my-3'>
            <h1 className="text-xl text-white mx-3">Community</h1>
        </div>
    </div>
  )
}

export default InSide