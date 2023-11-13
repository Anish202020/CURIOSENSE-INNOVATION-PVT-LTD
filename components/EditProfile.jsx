"use client"
import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Image from "next/image";

export default function EditProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [newname, setNewName] = useState("")
    const [newemail, setNewEmail] = useState("")



    const [error, setError] = useState("")

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!name || !email || !newname ) {
            setError("All fields are necessary")
            Toastify({
                text: "Enter Email & Name",
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

            // if (newemail == email && name == newname) {

            const res = await fetch("api/editprofile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    newname,
                    email,


                }),

            });

            if (res.ok) {
                const form = e.target;
                router.push("/");

                form.reset();
                Toastify({
                    text: "Profile Updated!",
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
                console.log("Profile Not Updated!");
                setError("Profile Not Updated!")
                Toastify({
                    text: "Profile Updated!",
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
            // } else {
            //     setError("New & Confirmed Password Not Matching")
            //     Toastify({
            //         text: "New & Confirmed Password Not Matching",
            //         className: "warning",
            //         style: {
            //             background: "red",
            //         },
            //         gravity: "bottom", // `top` or `bottom`
            //         position: "left", // `left`, `center` or `right`
            //         stopOnFocus: true, // Prevents dismissing of toast on hover
            //     }).showToast();
            //     return;
            // }



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid back place-items-center h-screen">

            <div className=" p-5 shadow-lg w-100 m-2 bg-slate-50 rounded-lg border-t-4 border-green-400">
                <div className="text-center align-center">
                    <Image src="https://i.ibb.co/fXPdQwX/logo.jpg" className="text-center rounded-lg " width={150} height={150} />
                    <h1 className="text-xl font-bold ">CURIOSENSE INNOVATION PRIVATE LIMITED</h1>
                    <h4 className=" font-bold ">Sensing the curiosity</h4>
                </div>
                <h1 className="text-xl font-bold my-4">Edit Your Profile&apos;s Name</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Old Name"
                        className="w-full"
                    />

                    <input
                        onChange={(e) => setNewName(e.target.value)}
                        type="text"
                        placeholder="New Name"
                        className="w-full"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Old Email"
                        className="w-full"
                    />


                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Edit Profile</button>
                    {
                        error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                    }


                    <Link className="text-sm mt-3 text-right" href={"/yourprofile"}>Don&apos;t want to change profile? <span className="underline">Your Profile</span></Link>

                </form>
            </div>



        </div>)
}