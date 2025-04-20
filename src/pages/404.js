import * as React from "react"
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => {
    return (
        <Layout pageTitle="404">
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                    <div className="w-full md:w-1/2 flex justify-center pt-24">
                        <StaticImage
                            src="../images/pct_404.png"
                            alt="pct_404"
                            placeholder="blurred"
                            layout="constrained"
                            className="w-[200px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left mt-8 pb-12 md:pb-56 md:mt-0">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
                        <p className="text-sm px-4 md:px-0 md:text-base text-gray-600">
                            一生懸命探しましたが、<br />
                            お探しのページは見つかりませんでした。<br />
                            まるで僕の生まれた意味のようですね。
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
