import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'

const IndexPage = ( { data } ) => {
    return (
        <Layout pageTitle="Index">
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi TOP image"
                    src="../images/Kagegonomi_top.jpg"
                    className="w-full"
                />
                <div className="absolute top-[7.5%] px-4">
                    <StaticImage
                        alt="Kagegonomi string image"
                        src="../images/Kagegonomi_logo_2.png"
                        className="w-full max-w-screen-sm mx-auto"
                    />
                </div>
                <div className="absolute top-[32%] left-4 px-4">
                    <StaticImage
                        alt="Kagegonomi subtitle string image"
                        src="../images/subtitle_5d.png"
                        className="w-full max-w-screen-sm mx-auto"
                    />
                </div>
                <div className="absolute bottom-28 px-4">
                    <StaticImage
                        alt="IkebukuroFM string image"
                        src="../images/ikebukurofm_5d.png"
                        className="w-full max-w-screen-sm mx-auto"
                    />
                </div>
                <div className="absolute left-8 bottom-20 px-4">
                    <StaticImage
                        alt="Housou youbi jikan string image"
                        src="../images/jikan_5d.png"
                        className="w-full max-w-screen-sm mx-auto"
                    />
                </div>
                <div className="absolute bottom-2 right-4 flex gap-4 p-2">
                    <a href="https://x.com/kagegonomi" target="_blank" rel="noopener noreferrer">
                        <StaticImage
                            alt="X logo"
                            src="../images/x_logo.png"
                            className="w-16 h-16"
                        />
                    </a>
                    <a href="https://note.com/kagegonomi/" target="_blank" rel="noopener noreferrer">
                        <StaticImage
                            alt="X logo"
                            src="../images/note_logo.png"
                            className="w-16 h-16"
                        />
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <a href="http://ikebukurofm.com/concept.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-info rounded-none no-animation w-full">池袋FM視聴リンク 📻</a>
                <a href="https://t.co/P2kxaIgMmJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-error rounded-none no-animation w-full">番組への投稿フォーム 📧</a>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi ABOUT image"
                    src="../images/Kagegonomi_about_up_half.jpg"
                    className="w-full"
                />
                <div className="absolute w-36 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi ABOUT string"
                        src="../images/Kagegonomi_about_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute mt-6 inset-0 flex items-center justify-center text-white">
                    人気パーソナリティー「DJ浅い人間」が、<br/>
                    毎週土曜深夜24時から池袋FMより<br/>
                    根暗な独身の鬱憤を代弁する激動の30分！<br/>
                </div>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi PROFILE image"
                    src="../images/okumono_tulip15.png"
                    className="w-full"
                />
                <div className="absolute w-60 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi PERSONALITY string"
                        src="../images/Kagegonomi_personality_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute avatar top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 rounded-full">
                        <StaticImage
                            alt="Kagegonomi DJ AsaiNingen image"
                            src="../images/Kagegonomi_DJ_AsaiNingen_face.jpg"
                        />
                    </div>
                </div>
                <div className="absolute w-60 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi DJ AsaiNingen string"
                        src="../images/Kagegonomi_DJ_AsaiNingen.png"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi Latest Chapter back image"
                    src="../images/Kagegonomi_Latest_Chapter_back.png"
                    className="w-full"
                />
                <div className="absolute w-80 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi LATEST CHAPTER string"
                        src="../images/Kagegonomi_latest_chapter_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute mt-8 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-4">
                    <iframe
                        src="https://www.youtube.com/embed/?list=UUQ11o0iwgUQ84MHMQtftoJQ"
                        title="Latest Video"
                        width="100%"
                        height="152"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi back image"
                    src="../images/white_back.jpg"
                    className="w-full"
                />
                <div className="absolute w-60 top-[12.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi WHAT'S NEW string"
                        src="../images/Kagegonomi_whatsnew_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl w-full mx-auto px-4">
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
                    <Link
                        to={`/contents`}
                        className="absolute bottom-[2.5%] right-6 w-36 btn btn-outline"
                    >
                        MORE
                    </Link>
                </div>
            </div>
            <div className="text-sm bg-[#facc15] text-black p-4">
                Copyright © 2025 Kagegonomi All Rights Reserved.
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMicrocmsContents(sort: { createdAt: DESC }, limit: 3) {
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