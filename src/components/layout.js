import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <header>
                    <div className="navbar bg-[#facc15]">
                        <div className="flex-1">
                            <StaticImage
                                alt="Kagegonomi Logo 1"
                                src="../images/Kagegonomi_logo.png"
                                height={30}
                            />
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><a>TOP</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>LATEST CHAPTER</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Layout