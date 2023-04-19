import React from "react"
import Hero from "../assets/ritik.jpeg"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { Link } from "react-scroll"




function Home() {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 ">
            <div className="max-w-screen-lg mx-auto flex items-center 
            h-full px-4 justify-between md:flex-row  ">
                <div className="flex flex-col">
                    <h1 className="text-white text-3xl font-bold sm:text-7xl">I am a Full-stack developer</h1>
                    <p className="text-gray-400 py-4 mx-w-md "> I have 1 year of experience building and desgining software. <br />
                        Currently, I love to work on web application using technologies <br /> like
                        React, Tailwind, Next JS and GraphQL. </p>
                    <div className="">
                        <Link to="Portfolio" smooth duration={1000} className=" flex cursor-pointer items-center w-fit text-white p-4 border-0 bg-gradient-to-r from-cyan-600 to-blue-400 rounded-2xl ">Portfolio
                            <span className=" ml-3 hover:rotate-90 duration-300"><BsFillArrowRightSquareFill size={20} /></span>
                        </Link>
                    </div>

                </div>
                <div className="w-2/6 h-1/2">
                    <img src={Hero} alt="" className="rounded-2xl md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home
