import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const links = [
        {
            id: 1,
            link: "Home"
        },

        {
            id: 2,
            link: "Social"
        },

        {
            id: 3,
            link: "Portfolio"
        },

        {
            id: 4,
            link: "Skills"
        }
        ,
        {
            id: 5,
            link: "Contact"
        },


    ];

    return (
        <div className='flex justify-between item-center w-full h-20 text-white bg-black fixed py-2 px-3'>
            <div>
                <h1 className='text-4xl font-signature items-center'>Ritik</h1>
            </div>
            <ul className="hidden md:flex items-center">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer font-medium text-gray-100 hover:scale-90 duration-200 ">
                        <Link to={link} smooth duration={1000}>
                            {link}
                        </Link>

                    </li>

                ))}

            </ul>
            <div onClick={() => setNavbar(!navbar)} className="pr-4 cursor-pointer z-10 text-gray-500">
                {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {navbar && (

                <ul className="flex h-screen flex-col justify-end items-center absolute top-0 left-0 bg-gradient-to-b from from-black to-gray-600 text-gray-500 ">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-6 cursor-pointer font-medium text-gray-100 hover:scale-90 duration-100 ">
                            {link}

                        </li>
                    ))}
                </ul>
            )}

        </div>



    );
};

export default Navbar
