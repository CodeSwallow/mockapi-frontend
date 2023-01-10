import React from "react"
import axios from "axios";

const client = axios.create({
    baseURL: "https://lqbnnct60e.execute-api.us-east-1.amazonaws.com/dev"
});

export default function CreateProjectForm({ user }) {
    const [projectName, setProjectName] = React.useState('');
    const [projectDescription, setProjectDescription] = React.useState('');

    function handleNameChange(e) {
        setProjectName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setProjectDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (projectName !== "") {
            async function getProjects() {
                console.log('createProject request sent')
                await client.post("/projects", {
                    "id": "123",
                    "title": projectName,
                    "description": projectDescription,
                    "models": []
                }, {
                    headers: {"Authorization": user.signInUserSession.idToken.getJwtToken()}
                });
                setProjectName("");
                setProjectDescription("");
            }
            getProjects();
        }
    }

    return (
        <div
            className="max-w-auto h-min p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create New Project</h5>
                <div>
                    <label htmlFor="projectName"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Project Name
                    </label>
                    <input type="text" name="projectName" id="projectName"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           value={projectName}
                           onChange={handleNameChange}
                           required/>
                </div>
                <div>
                    <label htmlFor="projectDescription"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <textarea id="projectDescription"
                              rows="4"
                              maxLength={300}
                              className="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-pink-100"
                              value={projectDescription}
                              onChange={handleDescriptionChange}>
                    </textarea>
                </div>
                <button type="submit"
                        className="w-full text-white focus:ring-2 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
                    Create Project
                </button>
            </form>
        </div>
    );
}