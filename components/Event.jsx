import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Event() {
  return (
    <div><section className="text-gray-600 body-font">
      <div className="flex container px-5 py-5 mx-auto flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Events</h1>
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-center text-gray-500">Learning , PLaying ,Excitement and so much more.</p>
      </div>

      <div className="container px-5 py-4 mx-auto">

        <div className="w-full mx-auto flex flex-wrap">
          {/* Event 1 */}
          <Image width={100} height={100} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://i.ibb.co/S7QMLhP/child-birthday.jpg" />
          <div className="lg:w-1/2 w-full p-10 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Upcoming Events</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Birthday Parties</h1>
            <div className="flex mb-4">
              {/* <a class="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">Description</a> */}
              {/* <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a> */}
              <a className="flex-grow border-b-2 text-green-500 border-green-300 py-2 text-lg px-1">Details</a>
            </div>
            <p className="leading-relaxed mb-4">Welcome to Party Perfection Events  Where Every Birthday Wish Comes True! Planning a birthday party can be overwhelming and time-consuming. From decorations to entertainment, it's easy to feel stressed. Enter Party Perfection Events, your go-to solution for stress-free, unforgettable birthday celebrations.</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Date </span>
              <span className="ml-auto text-gray-900">30/12/2023</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Total Members</span>
              <span className="ml-auto text-gray-900">50</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Cost per person</span>
              <span className="ml-auto text-gray-900">₹ 600/-</span>
            </div>
            <div className="flex">
              {/* <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Button</button> */}
              <div>

                <Link href={"https://forms.gle/fFnK5oJok1jjyQ3f7"} className=" mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Book Now</Link>
              </div>
            </div>
          </div>




        </div>



        {/* Event 2 */}
        <div className="w-full mt-10 mx-auto flex flex-wrap">

          <Image width={100} height={100} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto  h-64 object-cover object-center rounded" src="https://i.ibb.co/Chfp0zH/learning-classNamees.jpg" />

          <div className="lg:w-1/2 w-full p-10 lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Upcoming Events</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Learning Class</h1>
            <div className="flex mb-4">
              <a className="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">Details</a>
              {/* <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
            </div>
            <p className="leading-relaxed mb-4">Welcome to Learning Class, where knowledge meets innovation. In a rapidly evolving world, the need for continuous learning is more critical than ever. But finding the right classes can be a challenge. Enter Learning Class - Your one-stop solution for diverse, engaging, and accessible classes for all ages and interests</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Date</span>
              <span className="ml-auto text-gray-900">15/1/2024</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Total Members</span>
              <span className="ml-auto text-gray-900">60</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Cost per person</span>
              <span className="ml-auto text-gray-900">₹ 500/-</span>
            </div>
            <div className="flex">
              {/* <span class="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
              {/* <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Book Now</button> */}
              <div>

                <Link href={"https://forms.gle/fFnK5oJok1jjyQ3f7"} className=" mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Book Now</Link>
              </div>
              {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
            </div>
          </div>

        </div>

      </div>
    </section></div>
  )
}

export default Event