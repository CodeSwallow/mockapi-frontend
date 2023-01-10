import React from "react";
import '@aws-amplify/ui-react/styles.css';
import {Route, Routes} from "react-router-dom";
import PublicMainPage from "./pages/public/PublicMainPage";
import DocsPage from "./pages/public/DocsPage";
import DashboardPage from "./pages/account/DashboardPage";
import ProjectPage from "./pages/account/ProjectPage";
import NotFound from "./pages/NotFound";
import {ThemeContext} from "./theme-context";
import ProfilePage from "./pages/account/ProfilePage";

function App() {
    const [darkMode, setDarkMode] = React.useState(() => {
        const theme = localStorage.getItem("theme");
        return theme || "";
    })

    function toggleDarkMode() {
        if (darkMode === "dark") {
            setDarkMode("light")
            localStorage.setItem("theme", "light")
        } else {
            setDarkMode("dark")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <div className={`${darkMode === "dark" ? "dark" : "light"} bg-zinc-100 dark:bg-gray-900 min-h-screen`}>
            <ThemeContext.Provider value={toggleDarkMode}>
                <Routes>
                    <Route path="/" element={<PublicMainPage/>}/>
                    <Route path="/docs" element={<DocsPage/>}/>
                    <Route path="/account">
                        <Route index element={<ProfilePage/>}/>
                        <Route path="dashboard" element={<DashboardPage/>}/>
                        <Route path="project/:id" element={<ProjectPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
