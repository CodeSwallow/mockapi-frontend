import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../theme-context.js"

export default function Navbar(props) {
    const toggleDarkMode = useContext(ThemeContext)
    const currentPath = useLocation()

    return (
        <nav className="bg-zinc-100 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex items-center justify-between mx-auto px-24">
                <Link to="/" className="flex items-center">
                    <span
                        className="text-xl font-semibold whitespace-nowrap dark:text-white">
                        Code<span className="text-gray-900 dark:text-white">Swallow </span>
                        <span
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            API</span>
                    </span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto bg-zinc-100" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-zinc-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-zinc-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button onClick={toggleDarkMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="w-5 h-5 hover:text-pink-500 dark:text-gray-400 dark:hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <Link to="/"
                                  id="home"
                                  className={`block py-2 pl-3 pr-4 ${currentPath.pathname === "/"  ? "text-pink-500" : "text-gray-700"} bg-zinc-100 rounded md:hover:text-pink-500 md:bg-transparent md:p-0 ${currentPath.pathname === "/"  ? "dark:text-pink-500" : "dark:text-white"}`}
                            >
                                Home</Link>
                        </li>
                        <li>
                            <Link to="/docs"
                                  id="docs"
                                  className={`block py-2 pl-3 pr-4 ${currentPath.pathname === "/docs"  ? "text-pink-500" : "text-gray-700"} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 ${currentPath.pathname === "/docs"  ? "dark:text-pink-500" : "dark:text-white"} dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                            >
                                Docs</Link>
                        </li>
                        <li>
                            {props.accountButton}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}