import React from 'react'

function Contact() {
    return (
        <div id='Contact'>
            <h1 className=" text-white text-3xl flex justify-center font-bold bg-gray-900 py-7 ">Contact</h1>
            <div className="flex justify-between bg-gradient-to-b from-gray-900 via-gray-900 to to-black">
                <div className="mx-auto shadow-lg rounded-2xl  p-10 shadow-indigo-300/40 mb-15 bg-violet-200 flex justify-between md:flex-col">
                    <p className="text-3xl font-semibold pb-10 text-black"><span className="text-blue-600">Phone:</span>    7780072387</p>
                    <p className="text-3xl font-semibold pb-10 text-black"><span className="text-pink-600">Email-Id:</span>  mauryahritik31@gmail.com</p>
                    <p className="text-3xl font-semibold pb-10 text-black"><span className="text-cyan-600">Address:</span>  Chandigarh University,Punjab</p>
                </div>


            </div>


        </div>
    )
}

export default Contact
