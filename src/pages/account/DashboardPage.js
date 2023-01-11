import {withAuthenticator} from '@aws-amplify/ui-react';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import HoveredProject from "../../components/HoveredProject";
import CreateProjectForm from "../../components/CreateProjectForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LogoutButton from "../../components/LogoutButton";

const client = axios.create({
    baseURL: "https://lqbnnct60e.execute-api.us-east-1.amazonaws.com/dev"
});

function DashboardPage({signOut, user}) {
    const [projects, setProjects] = useState([]);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [visibleProjectForm, setVisibleProjectForm] = useState(false);

    useEffect(() => {
        async function getProjects() {
            console.log('getProjects request sent')
            const response = await client.get("/projects", {
                headers: {"Authorization": user.signInUserSession.idToken.getJwtToken()}
            });
            setProjects(response.data)
        }

        getProjects()
    }, []);

    const getProjectsLength = () => {
        return projects.length
    }

    const projectList = projects.map(project => {
        return (
            <div className="project max-h-min" key={project.id}>
                <Link to={`/account/project/${project.id}`}
                      onMouseEnter={() => setHoveredProject(project)}
                      className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {project.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">
                        {project.description}
                    </p>
                </Link>
            </div>
        )
    });

    return (
        <main>
            <Navbar accountButton={<LogoutButton signOut={signOut}/>}/>
            <section className="bg-zinc-100 dark:bg-gray-900 min-h-screen">
                <div className="pb-8 px-4 mx-auto max-w-screen-xl text-start lg:py-8 lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 ml-8 md:ml-0 md:text-4xl lg:text-5xl dark:text-white">
                        Dashboard
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div
                            className="grid grid-cols-1 md:mr-2 place-items-center md:place-items-stretch h-min">
                            <div className="grid grid-cols-2 max-w-xl">
                                <div
                                    className="text-black dark:text-white text-lg">Projects: {getProjectsLength()}</div>
                                <button
                                    onClick={() => setVisibleProjectForm(!visibleProjectForm)}
                                    className="text-pink-500 text-end hover:underline">
                                    Create New Project
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-y-5 mt-5">
                                {projects.length > 0
                                    ? projectList
                                    : <p className="text-black dark:text-white">No projects found...</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:ml-2 gap-y-5 h-min order-first md:order-last">
                            {visibleProjectForm === true ?
                                <CreateProjectForm user={user}/> : null}
                            <div className="invisible md:visible h-0 md:h-min">
                                <HoveredProject project={hoveredProject}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

export default withAuthenticator(DashboardPage);