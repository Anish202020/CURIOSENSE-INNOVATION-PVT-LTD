import React from 'react'
import Link from 'next/link'
function Event() {
  return (
    <div><section className="text-gray-600 body-font">
      <div className="flex container px-5 py-10 mx-auto flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Events</h1>
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-center text-gray-500">Learning , PLaying ,Excitement and so much more.</p>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">



              <img alt="content" className="object-cover object-center h-full w-full" src="https://i.ibb.co/S7QMLhP/child-birthday.jpg" />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Birthday Parties</h2>
            <p className="leading-relaxed m-5 text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            <div>

              <Link href={"https://forms.gle/fFnK5oJok1jjyQ3f7"} className=" mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Book Now</Link>
            </div>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://i.ibb.co/Chfp0zH/learning-classNamees.jpg" />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Learning ClassNamees</h2>
            <p className="leading-relaxed m-5 text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            <div>

              <Link href={"https://forms.gle/fFnK5oJok1jjyQ3f7"} className=" mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default Event