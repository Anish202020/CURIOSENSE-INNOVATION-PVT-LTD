import React from 'react'
import Link from 'next/link'
function Aboutus() {
    return (
        <div>
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex container px-5 py-10 mx-auto flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Us </h1>
                            <div className="h-1 w-20 bg-green-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-center text-gray-500">We walk the Talk...</p>
                    </div>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">About Us</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">--What we stand for!--</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At CURIOSENSE INNOVATIONS PVT LTD, we believe in the transformative power of curiosity and play-based learning to shape resilient minds. Our mission is rooted in fostering not just academic growth, but also nurturing the mental well-being of children.</p>
                    </div>

                    <div className="lg:w-4/5 m-20 mx-auto flex flex-wrap">
                        {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://images.ctfassets.net/p0qf7j048i0q/6CoR3gS2NgLRPCV9qXURfQ/a380ddaba2b6f5d07799b4bd20f80bcb/G1147656393.jpg"/> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-AURL5-O_Uw?si=OioDVrws_jYuwLN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sHjFRLDJeqk?si=1w_I8-xym6cYMbF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        <iframe width="560" className='lg:w-1/2 w-full  object-cover object-center rounded' height="315" src="https://www.youtube.com/embed/sHjFRLDJeqk?si=1w_I8-xym6cYMbF8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">We Share , Expand ,Grow Together</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">CURIOSENSE INNOVATION PRIVATE LIMITED</h1>

                            <p className="leading-relaxed">At CURIOSENSE INNOVATIONS PVT LTD, we believe in the transformative power of curiosity and play-based learning to shape resilient minds. Our mission is rooted in fostering not just academic growth, but also nurturing the mental well-being of children.</p>


                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Our Approach: Curiosity Unleashed</h2>
                            <p className="leading-relaxed text-base mb-4">We embrace a play-centric philosophy that recognizes the innate curiosity within every child. Through interactive and engaging experiences, we strive to create an environment where learning is an adventure, and questions are the compass.</p>
                            <a className="text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mind Matters: Prioritizing Mental Health</h2>
                            <p className="leading-relaxed text-base mb-4">We understand that mental health is the cornerstone of a child&apos;s holistic development. Our programs and resources are designed not just to educate but also to support the emotional well-being of every young mind in our care.</p>
                            <a className="text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Partners in Progress: Parents, Teachers, and Schools</h2>
                            <p className="leading-relaxed text-base mb-4">We believe in the power of collaboration. Parents, teachers, and schools play pivotal roles in shaping the future. Our approach involves working hand-in-hand with these key influencers, creating a cohesive ecosystem that nurtures skills beyond the classNameroom.</p>
                            <a className="text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Innovative Tools for Tomorrow&apos;s Skills</h2>
                            <p className="leading-relaxed text-base mb-4">Introducing innovative tools, we are committed to revolutionizing the learning landscape. These cutting-edge resources aim to augment traditional approaches, ensuring children are equipped not only for the challenges of today but also for the dynamic opportunities of tomorrow.</p>
                            <a className="text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Skills for Tomorrow: Empowering Futures</h2>
                            <p className="leading-relaxed text-base mb-4">Skill development is at the core of our mission. We aim to equip children with the tools they need not just for today, but for the challenges and opportunities of tomorrow. Together, let&apos;s build a foundation for success and a love for learning that lasts a lifetime.</p>
                            <a className="text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p className=" mx-auto text-center leading-relaxed text-base">Join us on this exciting journey of exploration, growth, and discovery. Together, we can inspire young minds to reach new heights.</p>
                    {/* <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">For more Click Here</button> */}
                    <div className='text-center m-6'>

                        <Link href={"/about"} className=" mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">About Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus