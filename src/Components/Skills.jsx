import React from 'react'
import Html from '../assets/portfolio/html.png'
import Css from '../assets/portfolio/css.png'
import Javascript from '../assets/portfolio/JavaScript.png'
import Reacts from '../assets/portfolio/react.png'
import Node from '../assets/portfolio/node.jpg'
import Tailwind from '../assets/portfolio/tailwind.png'


function Skills() {
    const Skills =
        [
            {
                id: 1,
                src: Html,
                style: 'shadow-orange-500'

            },
            {
                id: 2,
                src: Css,
                style: 'shadow-sky-500'
            },
            {
                id: 3,
                src: Javascript,
                style: 'shadow-yellow-500'
            },
            {
                id: 4,
                src: Reacts,
                style: 'shadow-sky-500'
            },
            {
                id: 5,
                src: Tailwind,
                style: 'shadow-green-300'
            },
            {
                id: 6,
                src: Node,
                style: 'shadow-green-500'
            }
        ]
    return (

        <div id='Skills'>
            <h1 className=" text-white text-3xl flex justify-center font-bold bg-gray-900 py-7 ">Skills</h1>
            <div className=" flex flex-col pt-4 pl-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
                <h1 className="text-white mb-3 text-xl flex justify-start">Skills that I have mastered</h1>

                <div className=" w-full py-8 px-12 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 gap-8  sm:px-0">
                    {
                        Skills.map(({ id, src, style }) => (
                            <div key={id} className={`shadow-md  py-3 rounded-2xl ${style}`}>
                                <img className="w-80 h-60 mx-auto px-4 " src={src} alt="" />
                                {/* <p className="text-sm">Code</p> */}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default Skills
