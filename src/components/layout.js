import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="navbar bg-yellow-500 shadow-sm fixed top-0 left-0 right-0 z-50 max-md:min-h-12 max-md:h-12">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost">
                            <StaticImage
                                src="../images/kagegonomi_logo.png"
                                alt="Kagegonomi Logo"
                                layout="fixed"
                                height={40}
                                loading="eager"
                                className="md:block hidden mx-auto"
                            />
                            <StaticImage
                                src="../images/kagegonomi_logo.png"
                                alt="Kagegonomi Logo"
                                layout="fixed"
                                height={26}
                                loading="eager"
                                className="md:hidden block mx-auto"
                            />
                        </Link>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/#whats_new">WHAT'S NEW</a></li>
                            <li><a href="/#latest_episode">LATEST EPISODE</a></li>
                            <li><a href="/#onair_notes">ON-AIR NOTES</a></li>
                            <li><a href="/#about">ABOUT</a></li>
                            <li><a href="/#parsonality">PARSONALITY</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label htmlFor="my-drawer-4" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                </div>
                <main>
                    {children}
                </main>
                <div className="text-sm bg-yellow-500 text-black p-4 h-12">
                    Copyright © 2025 Kagegonomi All Rights Reserved.
                </div>
            </div>
            <div className="drawer-side z-[999]">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-yellow-500 text-base-content min-h-full w-80 p-4">
                    <li>
                        <label
                            htmlFor="my-drawer-4"
                            className="cursor-pointer"
                            onClick={() => {
                                const drawerToggle = document.getElementById("my-drawer-4");
                                if (drawerToggle) drawerToggle.checked = false;
                            }}
                        >
                            <a href="/#whats_new">WHAT'S NEW</a>
                        </label>
                    </li>
                    <li>
                        <label
                            htmlFor="my-drawer-4"
                            className="cursor-pointer"
                            onClick={() => {
                                const drawerToggle = document.getElementById("my-drawer-4");
                                if (drawerToggle) drawerToggle.checked = false;
                            }}
                        >
                            <a href="/#latest_episode">LATEST EPISODE</a>
                        </label>
                    </li>
                    <li>
                        <label
                            htmlFor="my-drawer-4"
                            className="cursor-pointer"
                            onClick={() => {
                                const drawerToggle = document.getElementById("my-drawer-4");
                                if (drawerToggle) drawerToggle.checked = false;
                            }}
                        >
                            <a href="/#onair_notes">ON-AIR NOTES</a>
                        </label>
                    </li>
                    <li>
                        <label
                            htmlFor="my-drawer-4"
                            className="cursor-pointer"
                            onClick={() => {
                                const drawerToggle = document.getElementById("my-drawer-4");
                                if (drawerToggle) drawerToggle.checked = false;
                            }}
                        >
                            <a href="/#about">ABOUT</a>
                        </label>
                    </li>
                    <li>
                        <label
                            htmlFor="my-drawer-4"
                            className="cursor-pointer"
                            onClick={() => {
                                const drawerToggle = document.getElementById("my-drawer-4");
                                if (drawerToggle) drawerToggle.checked = false;
                            }}
                        >
                            <a href="/#parsonality">PARSONALITY</a>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Layout
