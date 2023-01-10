import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {withAuthenticator} from '@aws-amplify/ui-react';
import Navbar from "../../components/Navbar";
import LogoutButton from "../../components/LogoutButton";
import Footer from "../../components/Footer";
import axios from "axios";
import ModelFields from "../../components/ModelFields";

const client = axios.create({
    baseURL: "https://lqbnnct60e.execute-api.us-east-1.amazonaws.com/dev"
});

function ProjectPage({signOut, user}) {
    const [modelToggled, setModelToggled] = useState(null);
    const [project, setProject] = useState({
        "id": "",
        "title": "",
        "description": "",
        "models": []
    })
    const {id} = useParams();

    // const createNewModel = () => {
    //     console.log("create new model")s
    // }

    const toggleModel = (model) => {
        if (modelToggled === model) {
            setModelToggled(null);
        } else {
            setModelToggled(model);
        }
    }

    useEffect(() => {
        async function getProject() {
            console.log('getProject request sent')
            const response = await client.get(`/projects/${id}`, {
                headers: {"Authorization": user.signInUserSession.idToken.getJwtToken()}
            });
            setProject(response.data)
        }
        getProject()
    }, []);

    const modelsList = project.models.map((model) => {
        return (
            <ModelFields model={model} modelToggled={modelToggled} toggleModel={toggleModel} key={model.id}/>
        )
    })

    return (
        <main>
            <Navbar accountButton={<LogoutButton signOut={signOut}/>}/>
            <section className="bg-zinc-100 dark:bg-gray-900 min-h-screen">
                <div className="pb-8 px-4 mx-auto max-w-screen-lg text-start lg:py-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-3 md:col-span-2 max-h-min flex flex-row w-full gap-4">
                            <h1 className="basis-3/4 mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                                {project.title}
                            </h1>
                            <button
                                type="button"
                                className="basis-1/4 text-white rounded-lg mb-2 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 block p-2.5"
                                onClick={() => {
                                }}>
                                <div className="px-1 text-sm md:text-md flex flex-row w-full gap-4 justify-around">
                                    <p className="self-center">New Model</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div
                            className="h-min col-span-3 md:col-span-1 row-span-1 md:row-span-3 bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Description</h5>
                            <p className="font-light mb-2 text-gray-500 dark:text-gray-400">
                                {project.description}
                            </p>
                            <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Models: <span
                                className="ml-1">{project.models.length}</span></h5>
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            {modelsList}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

export default withAuthenticator(ProjectPage);