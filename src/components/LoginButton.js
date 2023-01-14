import React from "react";
import {Link} from "react-router-dom";

export default function LoginButton() {
    return (
        <Link to="/account/projects"
              id="account"
              className={`block py-2 pl-3 pr-4 text-gray-700 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>
            Account
        </Link>
    );
}
