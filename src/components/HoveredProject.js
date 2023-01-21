import React from "react";
import {Link} from "react-router-dom";

export default function HoveredProject({project}) {

    function getProjectModels() {
        return project ? project.models.map((model) => {
            return (
                <li key={model.id} className="text-black dark:text-white">
                    {model.title}
                </li>
            )
            }) : null
    }

    const hoveredProject = project
        ? <div
            className="sticky top-5 max-w-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/account/project/${project.id}`}>
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {project.title}
                </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">
                {project.description}
            </p>
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Models Used
            </h5>
            <ul className="list-disc mb-4 ml-8">
                {getProjectModels()}
            </ul>
            <Link to={`/account/projects/${project.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-pink-800 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 dark:focus:ring-pink-100">
                Enter Project
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </Link>
        </div>
        : <div></div>;


    return (
        <div>
            {hoveredProject}
        </div>
    );
}