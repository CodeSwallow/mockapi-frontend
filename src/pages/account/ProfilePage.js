import React from "react";
import {Authenticator} from "@aws-amplify/ui-react";
import Navbar from "../../components/Navbar";
import LogoutButton from "../../components/LogoutButton";
import Footer from "../../components/Footer";

export default function ProfilePage(props) {

    return (
        <Authenticator className="pt-10">
            {({signOut, user}) => (
                <main>
                    <Navbar accountButton={<LogoutButton signOut={signOut}/>}/>
                    <section className="bg-zinc-100 dark:bg-gray-900 min-h-screen">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                {user.username}
                            </h1>
                            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                                Hello!!
                            </p>
                        </div>
                    </section>
                    <Footer/>
                </main>
            )}
        </Authenticator>
    );
}