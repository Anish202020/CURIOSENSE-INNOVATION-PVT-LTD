import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function Service() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Services & Product</h1>
                            <div className="h-1 w-20 bg-green-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-center text-gray-500">We provide the best services and product.</p>
                    </div>

                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://tse1.mm.bing.net/th?id=OIP.tuwHzPocb5M-vohzqWVYSwHaE-&pid=Api&P=0&h=1801" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - PRODUCT</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PRODUCT 1</h1>
                                    <p className="leading-relaxed mb-3">This is Product 1.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            ₹ 200/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            PRODUCT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb4ea455073437.5975e6a339745.jpg" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - PRODUCT</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PRODUCT 2</h1>
                                    <p className="leading-relaxed mb-3">This is Product 2.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                           ₹ 200/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            PRODUCT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://i.ytimg.com/vi/SrXOwLiWWz0/maxresdefault.jpg" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - SERVICE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SERVICE 1</h1>
                                    <p className="leading-relaxed mb-3">This is Service 1.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            ₹ 300/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            SERVICE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://ucarecdn.com/a78b5d0f-8163-44d8-81b8-c737aa026a70/-/preview/O6IBbhXI" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - PRODUCT</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PRODUCT 3</h1>
                                    <p className="leading-relaxed mb-3">This is Product 3.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            ₹ 200/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            PRODUCT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://tse3.mm.bing.net/th?id=OIP.P3UwFwq9PpJuJRlHOcDd-wHaDv&pid=Api&P=0&h=180" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - SERVICE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SERVICE 2</h1>
                                    <p className="leading-relaxed mb-3">This is Service 2.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                           ₹ 300/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            SERVICE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image unoptimized width={10} height={10} alt="ecommerce" className="object-cover lg:h-48 md:h-36 w-full object-cover object-center object-center w-full h-full block" src="https://freedesignfile.com/upload/2017/06/Baby-play-with-toys-HD-picture.jpg" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY - SERVICE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SERVICE 3</h1>
                                    <p className="leading-relaxed mb-3">This is Service 3.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            ₹ 300/-
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            SERVICE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
                <div className='container px-5 text-center py-10 mx-auto'>
                    <Link href={"https://forms.gle/fFnK5oJok1jjyQ3f7"} className="mx-auto mt-6 text-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded" ><span >Order Now!</span></Link>

                </div>
            </section>
        </div>
    )
}

export default Service