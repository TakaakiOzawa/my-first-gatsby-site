import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'

const IndexPage = ( { data } ) => {
    return (
        <Layout pageTitle="Index">
            {/*MAIN VISUAL*/}
            <section className="relative">
                <StaticImage
                    src="../images/kagegonomi_mainvisual_temp.png"
                    alt="Kagegonomi main visual"
                    layout="fullWidth"
                    placeholder="blurred"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* タイトル画像など */}
                </div>
            </section>
            {/*WHAT'S NEW*/}
            <section className="relative pt-[100px] pb-[80px]" id="whats_new">
                <h2 className="text-center mb-[82px]">
                    <StaticImage
                        src="../images/head_whatsnew.png"
                        alt="WHAT'S NEW | 新着情報"
                    />
                </h2>
                <div className="w-[1080px] mx-auto">
                    <div className="inset-0 flex items-center justify-center mb-10">
                        <div className="w-full mx-auto">
                            {data.allMicrocmsContents.edges.map((node) => (
                                <Link
                                    to={`/contents/${node.node.id}`}
                                    key={node.node.id}
                                    className="block p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
                                >
                                    <article key={node.node.id}>
                                        <p className="text-blue-600 text-sm font-bold mb-2">{node.node.createdAt}</p>
                                        <p className="text-base font-bold">{node.node.title}</p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-right">
                        <Link
                            to={`/contents`}
                            className="bottom-[2.5%] right-6 w-36 btn btn-outline"
                        >
                            MORE
                        </Link>
                    </div>
                </div>
            </section>
            {/*LATEST CHAPTER*/}
            <section className="relative pt-[100px] pb-[80px]" id="latest_chapter">
                <h2 className="text-center mb-[82px]">
                    <StaticImage
                        src="../images/head_latestchapter.png"
                        alt="LATEST CHAPTER | 最新回"
                    />
                </h2>
                <div className="w-[1080px] mx-auto">
                    <iframe
                        src="https://www.youtube.com/embed/?list=UUQ11o0iwgUQ84MHMQtftoJQ"
                        title="latest chapter"
                        width="100%"
                        height="152"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMicrocmsContents(sort: { createdAt: DESC }, limit: 4) {
            edges {
                node {
                    id
                    title
                    createdAt(formatString: "YYYY.MM.DD")
                    category {
                        id
                        name
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="TOP" />

export default IndexPage