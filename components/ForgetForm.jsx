"use client"
import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Image from "next/image";

export default function ForgetForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")

    const [error, setError] = useState("")

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!newpassword || !email || !password) {
            setError("All fields are necessary")
            Toastify({
                text: "Enter Email & New Password",
                className: "warning",
                style: {
                    background: "red",
                },
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
            }).showToast();
            return;
        }


        try {
            if (newpassword == password) {


                const res = await fetch("api/forgetpassword", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({

                        email,
                        password,
                        newpassword
                    }),

                });

                if (res.ok) {
                    const form = e.target;
                    router.push("/");

                    form.reset();
                    Toastify({
                        text: "New Password Set!",
                        className: "warning",
                        style: {
                            background: "green",
                        },
                        gravity: "bottom", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                    }).showToast();
                    return;
                } else {
                    console.log("User password setting failed.");
                }

            } else {
                setError("New & Confirmed Password Not Matching")
                Toastify({
                    text: "New & Confirmed Password Not Matching",
                    className: "warning",
                    style: {
                        background: "red",
                    },
                    gravity: "bottom", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                }).showToast();
                return;
            }


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid pickleed place-items-center h-screen">

            <div className=" p-5 shadow-lg w-100 m-2 bg-slate-50 rounded-lg border-t-4 border-green-400">
                <div className="text-center align-center">
                    <Image src="https://i.ibb.co/fXPdQwX/logo.jpg" className="text-center rounded-lg " width={150} height={150} />
                    <h1 className="text-xl font-bold ">CURIOSENSE INNOVATION PRIVATE LIMITED</h1>
                    <h4 className=" font-bold ">Sensing the curiosity</h4>
                </div>
                <h1 className="text-xl font-bold my-4">Forget Password</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        className="w-full"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="New Password"
                        className="w-full"
                    />
                    <input
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        placeholder="Confirmed Password"
                        className="w-full"
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Set New Password</button>
                    {
                        error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                    }


                    <Link className="text-sm mt-3 text-right" href={"/"}>Don't want to change password? <span className="underline">Login</span></Link>

                </form>
            </div>



        </div>)
}