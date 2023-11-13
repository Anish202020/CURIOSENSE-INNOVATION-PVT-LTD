'use client'
import React from 'react'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function UserProfile() {
    const { data: session } = useSession();
    return (
        <div>
            <div>
                <div className="grid backy place-items-center h-screen">


                    <div className=" p-5 shadow-lg w-100 m-2 rounded-lg bg-slate-50 border-t-4 border-green-400">
                        <div className="text-center  align-center">
                            <img src="https://i.ibb.co/fXPdQwX/logo.jpg" className="text-center rounded-lg " width={150} height={150} />
                            <h3 className="text-xl font-bold ">CURIOSENSE INNOVATION PRIVATE LIMITED</h3>
                            <h4 className=" font-bold ">Sensing the curiosity</h4>
                        </div>
                        <h1 className="text-xl font-bold my-4">Your Profile</h1>
                        <div className="flex flex-col gap-3">
                            <button className="bg-slate-100 text-black font-bold  px-6 py-2">{session?.user?.name}</button>
                            <button className="bg-slate-100 text-black font-bold  px-6 py-2">{session?.user?.email}</button>
                            
                            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"

                            >
                                <div

                                    onClick={() => (
                                        {
                                            ...Toastify({
                                                text: "You Have Logged Out",
                                                className: "warning",
                                                style: {
                                                    background: "green",
                                                },
                                                gravity: "bottom", // `top` or `bottom`
                                                position: "left", // `left`, `center` or `right`
                                                stopOnFocus: true, // Prevents dismissing of toast on hover
                                            }).showToast()
                                        },
                                        signOut())

                                    }


                                >
                                    Sign Out
                                </div>

                            </button>


                            {/* <Link className="text-sm mt-3 text-right" href={"/editname"}><span className="underline">Edit Name?</span></Link> */}
                            <Link className="text-sm mt-3 text-right" href={"/edit"}><span className="underline">Edit Profile Name?</span></Link>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default UserProfile