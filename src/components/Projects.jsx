import React from 'react'
import Pagination from './Pagination'

function Projects() {
  return (
    <>
        <div className="py-12">
            <div className="mx-auto rounded-lg border max-w-7xl px-6 lg:px-8">
                <h1 className="border-b-2 ml-1 py-4 text-white">projects</h1>
                <div className="flex-col">
                    <div className="flex-row flex-wrap justify-between">
                        <img className="h-16 w-16 rounded-full my-10" src={require('../pictures/picofdev.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects