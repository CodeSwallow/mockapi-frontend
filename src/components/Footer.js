import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer
            className="p-4 bg-zinc-100 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
            <span className="ml-20 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022 <Link to="/"
                             className="hover:underline">CodeSwallow
                </Link>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <button className="mr-20 hover:underline">Contact</button>
                </li>
            </ul>
        </footer>
    );
}
