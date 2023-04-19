import React from 'react'
import Ecommer1 from '../assets/portfolio/ecommerce1.png'
import Ecommer2 from '../assets/portfolio/ecommerce2.png'
import Ecommer3 from '../assets/portfolio/ecommerce3.png'
import Location from '../assets/portfolio/Location detect.png'
import Xerox from '../assets/portfolio/xerox1.png'



function Portfolio() {
    const Portfolio =
        [
            {
                id: 1,
                src: Ecommer1
            },
            {
                id: 2,
                src: Ecommer2
            },
            {
                id: 3,
                src: Ecommer3
            },
            {
                id: 4,
                src: Location
            },
            {
                id: 5,
                src: Xerox
            }
        ]

    return (
        <div id='Portfolio'>
            <h1 className=" text-white text-3xl flex justify-center font-bold bg-gray-900 py-7 ">Portfolio</h1>
            <div className=" flex flex-col pt-4 pl-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
                <h1 className="text-white mb-3 text-xl flex justify-start">Some of my projects here</h1>

                <div className=" flex flex-wrap justify-around max-w-fit sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0">
                    {
                        Portfolio.map(({ id, src }) => (
                            <div key={id} className=" ">
                                <img className="w-70 h-60 px-4" src={src} alt="" />
                                {/* <p className="text-sm">Code</p> */}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio
