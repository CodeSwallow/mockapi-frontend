import React from "react";
import {Link} from "react-router-dom";

export default function LogoutButton(props) {
    return (
        <Link to="/"
              id="logout"
              className={`block py-2 pl-3 pr-4 rounded text-gray-700 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              onClick={props.signOut}>
            Logout
        </Link>
    );
}
