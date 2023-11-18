
'use client'
import Image from 'next/image'
import React from 'react'

function Sampleevents() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="flex container px-5 py-10 mx-auto flex-wrap w-full mb-0">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Events</h1>
                        <div className="h-1 w-20 bg-green-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-center text-gray-500">Learning , PLaying ,Excitement and so much more.</p>
                </div>
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        
                        <iframe height="400" className="rounded-lg w-full overflow-hidden" src="https://www.youtube.com/embed/8rTc1gtmBcY?si=hnNFfe_6Uv04spZj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        {/* <iframe height="400"  className="rounded-lg w-full overflow-hidden" src="https://www.youtube.com/embed/Jxgx_KGf4i8?si=MjEkbs_TrvMMyEBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className=" rounded-full inline-flex items-center justify-center ">
                                    <Image
                                        className="rounded-full " width={90} height={90}
                                        src="https://i.ibb.co/fXPdQwX/logo.jpg"
                                        alt=""
                                        unoptimized
                                        // layout = "fixed"
                                        // style={{ height:"auto", width:"auto" }}
                                        style={{ width: '4.5rem', height: '4rem', borderRadius: '20%' }}
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">CURIOSENSE INNOVATION PRIVATE LIMITED</h2>
                                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">Learning , PLaying ,Excitement and so much more..</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">At CURIOSENSE INNOVATIONS PVT LTD, we believe in the transformative power of curiosity and play-based learning to shape resilient minds. Our mission is rooted in fostering not just academic growth, but also nurturing the mental well-being of children.</p>
                                <a className="text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sampleevents