import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout