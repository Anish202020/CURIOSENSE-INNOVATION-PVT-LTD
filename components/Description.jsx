import Image from 'next/image'
import React from 'react'

function Description() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CURIOSENSE INNOVATION PRIVATE LIMITED</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to CURIOSENSE INNOVATIONS PVT LTD</p>
          </div>
          <div className="flex flex-wrap -m-4">
            
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/34NsYGd/download-1.webp" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believes in...</h1>
                  <p className="leading-relaxed">At CURIOSENSE INNOVATIONS PVT LTD, we believe in the transformative power of curiosity and play-based learning to shape resilient minds. Our mission is rooted in fostering not just academic growth, but also nurturing the mental well-being of children.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/gZ1ydN6/download.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">What do we do...</h1>
                  <p className="leading-relaxed">We embrace a play-centric philosophy that recognizes the innate curiosity within every child. Through interactive and engaging experiences, we strive to create an environment where learning is an adventure, and questions are the compass.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/tDnsj0z/download-9.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believes in...</h1>
                  <p className="leading-relaxed">We understand that mental health is the cornerstone of a child's holistic development. Our programs and resources are designed not just to educate but also to support the emotional well-being of every young mind in our care.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/LRTJnw0/download-10.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believes in...</h1>
                  <p className="leading-relaxed">We believe in the power of collaboration. Parents, teachers, and schools play pivotal roles in shaping the future. Our approach involves working hand-in-hand with these key influencers, creating a cohesive ecosystem that nurtures skills beyond the classNameroom.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">

                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/nRjCQf1/download-5.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believes in...</h1>
                  <p className="leading-relaxed">Introducing innovative tools, we are committed to revolutionizing the learning landscape. These cutting-edge resources aim to augment traditional approaches, ensuring children are equipped not only for the challenges of today but also for the dynamic opportunities of tomorrow.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image unoptimized alt="gallery" width={100} height={100} className="absolute inset-0 w-full h-full  " src="https://i.ibb.co/0rNwYHP/download-12.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Believes in...</h1>
                  <p className="leading-relaxed">Skill development is at the core of our mission. We aim to equip children with the tools they need not just for today, but for the challenges and opportunities of tomorrow. Together, let&apos;s build a foundation for success and a love for learning that lasts a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Description