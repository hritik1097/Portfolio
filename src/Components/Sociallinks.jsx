import React from 'react'
import Fb from '../assets/portfolio/fb2.png'
import Git from '../assets/portfolio/github.png'
import Insta from '../assets/portfolio/insta.jpg'
import Linked from '../assets/portfolio/linkedin.png'
import Resume from '../assets/portfolio/resume.jpg'


function Sociallinks() {
    const Sociallink =
        [
            {
                id: 1,
                src: Fb,
                href: "https://www.facebook.com"
            },
            {
                id: 2,
                src: Git,
                href: "https://github.com/login"
            },
            {
                id: 3,
                src: Insta,
                href: "https://www.instagram.com/"
            },
            {
                id: 4,
                src: Linked,
                href: "https://www.linkedin.com"
            },
            {
                id: 5,
                src: Resume,
                href: "/Resume.pdf",
                download: true,
            }
        ]

    return (
        <div id='Social'>
            <h1 className=" text-white text-3xl flex justify-center font-bold bg-gray-900 py-10 ">Social Links</h1>
            <div className=" flex pb-4 justify-around items-center bg-gradient-to-b  from-gray-900 via-gray-900 to-gray-900">
                {
                    Sociallink.map(({ id, href, src, download }) => (
                        <div key={id} className="rounded-2xl cursor-pointer ">
                            <a href={href}>
                                <img className=" rounded-2xl w-20 hover:scale-90 duration-100" src={src} alt=""
                                // download={download}
                                // target="_blank"
                                />



                            </a>

                        </div>
                    ))


                }

            </div>
        </div>
    )
}

export default Sociallinks
