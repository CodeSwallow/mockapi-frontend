import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {Link} from "react-router-dom";

const AccountBreadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <React.Fragment>
            <nav className="flex ml-24" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3 ml-2 sm:ml-4">
                    {breadcrumbs.map((breadcrumb, index) =>
                        <li className="inline-flex items-center" key={index}>
                            {
                                breadcrumb.key === "/"
                                    ? <svg aria-hidden="true" className="w-4 h-4 mr-2 dark:text-white" fill="currentColor"
                                           viewBox="0 0 20 20"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                           strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>
                            }
                            <Link to={breadcrumb.key}
                                  className="hover:text-pink-500 dark:hover:text-pink-500 ml-0 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-200">
                                {breadcrumb.breadcrumb.props.children}
                            </Link>
                        </li>
                    )}
                </ol>
            </nav>
        </React.Fragment>
    );
};

export default AccountBreadcrumbs;