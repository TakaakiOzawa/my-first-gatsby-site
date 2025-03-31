import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="navbar bg-yellow-500 shadow-sm fixed top-0 left-0 right-0 z-50">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost">
                        <StaticImage
                            src="../images/kagegonomi_logo.png"
                            alt="Kagegonomi Logo"
                            layout="fixed"
                            height={38}
                            className="block mx-auto"
                        />
                    </Link>
                </div>
                <div className="navbar-center absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#whats_new">WHAT'S NEW</a></li>
                        <li><a href="#latest_episode">LATEST CHAPTER</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#parsonality">PARSONALITY</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-yellow-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="#whats_new">WHAT'S NEW</a></li>
                            <li><a href="#latest_episode">LATEST CHAPTER</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#parsonality">PARSONALITY</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout