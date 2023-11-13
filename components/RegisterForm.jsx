'use client'
// import { setTimeout } from "timers/promises";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useState } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link'
export default function RegisterForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // console.log(name)
  // console.log(email)
  // console.log(password)



  const router = useRouter();
  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary")
      Toastify({
        text: "Enter Full Details",
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
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        Toastify({
          text: "User Already Exists Now Login",
          className: "warning",
          style: {
            background: "green",
          },
          gravity: "bottom", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
        router.push("/")
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),

      });

      if (res.ok) {
        const form = e.target;
        router.push("/");

        form.reset();
        Toastify({
          text: "Registered",
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
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
    ;
  }
  return (
    <div className="grid pickled place-items-center h-screen">

      <div className="shadow-lg p-5 w-100 m-2 bg-slate-50 rounded-lg border-t-4 border-green-400">
        <div className="text-center align-center">
          <img src="https://i.ibb.co/fXPdQwX/logo.jpg" className="text-center rounded-lg " width={150} height={150} />
          <h1 className="text-xl font-bold ">CURIOSENSE INNOVATION PRIVATE LIMITED</h1>
          <h4 className=" font-bold ">Sensing the curiosity</h4>
        </div>
        <h1 className="text-xl font-bold my-4">Registeration Form</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

