"use client"
import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Image from "next/image";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                Toastify({
                    text: "Invalid Credentials",
                    className: "warning",
                    style: {
                      background: "red",
                    },
                    gravity: "bottom", // `top` or `bottom`
                      position: "left", // `left`, `center` or `right`
                      stopOnFocus: true, // Prevents dismissing of toast on hover
                  }).showToast()
                return;
            }

            router.replace("home");
            Toastify({
                text: "You are Logged In!!!",
                className: "warning",
                style: {
                  background: "green",
                },
                gravity: "bottom", // `top` or `bottom`
                  position: "left", // `left`, `center` or `right`
                  stopOnFocus: true, // Prevents dismissing of toast on hover
              }).showToast()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid pickle place-items-center h-screen">
            
            
            <div className=" p-5 shadow-lg w-100 m-2 rounded-lg bg-slate-50 border-t-4 border-green-400">
            <div className="text-center  align-center">
                <img src="https://i.ibb.co/fXPdQwX/logo.jpg" className="text-center rounded-lg " width={150} height={150}/>
                <h3 className="text-xl font-bold ">CURIOSENSE INNOVATION PRIVATE LIMITED</h3>
                <h4 className=" font-bold ">Sensing the curiosity</h4>
            </div>
            <h1 className="text-xl font-bold my-4">Login Form</h1>
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
                        className="w-full"
                        placeholder="Password"
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>
                    {
                        error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                    }


                    <Link className="text-sm mt-3 text-right" href={"/forgetpassword"}><span className="underline">Forgot Password?</span></Link>
                    <Link className="text-sm mt-3 text-right" href={"/register"}>Don't have an account? <span className="underline">Register</span></Link>
                </form>
            </div>



        </div>)
}