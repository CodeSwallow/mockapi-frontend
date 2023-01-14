import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LoginButton from "../../components/LoginButton";

export default function PublicMainPage() {
    return (
        <div>
            <Navbar accountButton={<LoginButton/>}/>
            <section className="bg-zinc-100 dark:bg-gray-900 min-h-screen">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h3 className="mb-8 font-extrabold text-5xl text-gray-900 dark:text-white">
                        Mock API</h3>
                    <Link to="/account/projects"
                          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                          role="alert">
                        <span className="text-sm font-medium px-4 py-1.5">Get Started</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </Link>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Create Functional Endpoints
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Easily create objects along with their respective endpoints to use within your app.
                    </p>
                    <div
                        className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to="/docs"
                              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black dark:text-white rounded-lg bg-primary-700 border border-gray-300 dark:border-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}