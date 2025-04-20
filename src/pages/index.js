import React, { useEffect, useState } from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'

const IndexPage = ({ data }) => {
    const [isOnair, setIsOnair] = useState(false)

    useEffect(() => {
        const now = new Date()
        const day = now.getDay()
        const hour = now.getHours()
        const minute = now.getMinutes()

        if (day === 0 && hour === 0 && minute < 30) {
            setIsOnair(true)
        } else {
            setIsOnair(false)
        }
    }, [])

    useEffect(() => {
        const scriptId = "note-embed-script"
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script")
            script.id = scriptId
            script.async = true
            script.src = "https://note.com/scripts/embed.js"
            document.body.appendChild(script)
            return () => {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <Layout pageTitle="Index">
            {/*MAIN VISUAL*/}
            <section className="relative overflow-hidden">
                <h1>
                    <div className="hidden">
                        カゲゴノミ
                    </div>
                </h1>
                <div className="block md:hidden w-full aspect-[9/20]">
                    <StaticImage
                        src="../images/kagegonomi_mainvisual_temp.webp"
                        alt="kagegonomi main visual"
                        layout="fullWidth"
                        loading="eager"
                        placeholder="blurred"
                        quality={90}
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingBottom: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        imgClassName="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="hidden md:block">
                    <StaticImage
                        src="../images/kagegonomi_mainvisual_temp.webp"
                        alt="kagegonomi main visual"
                        layout="fullWidth"
                        loading="eager"
                        placeholder="blurred"
                        quality={90}
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-24 max-md:mt-20">
                    <div className="md:hidden flex flex-row items-center">
                        <StaticImage
                            src="../images/ikebukurofm.png"
                            alt="ikebukurofm"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={22}
                        />
                        <StaticImage
                            src="../images/datetime.png"
                            alt="datetime"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={22}
                        />
                    </div>
                    <div className="max-md:hidden flex flex-row items-center">
                        <StaticImage
                            src="../images/ikebukurofm.png"
                            alt="ikebukurofm"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={40}
                        />
                        <StaticImage
                            src="../images/datetime.png"
                            alt="datetime"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={40}
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
                    <div className="md:hidden">
                        <StaticImage
                            src="../images/title_kagegonomi.png"
                            alt="kagegonomi title"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={76}
                        />
                    </div>
                    <div className="max-md:hidden">
                        <StaticImage
                            src="../images/title_kagegonomi.png"
                            alt="kagegonomi title"
                            layout="fixed"
                            loading="eager"
                            placeholder="blurred"
                            height={160}
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0">
                    <div className="md:hidden mb-40 ml-4">
                        {isOnair ? (
                            <a href="http://ikebukurofm.com/concept.html" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/onair.png"
                                    alt="onair"
                                    layout="fixed"
                                    loading="eager"
                                    placeholder="blurred"
                                    height={180}
                                    className="transition transform duration-300 hover:scale-110"
                                />
                            </a>
                        ) : (
                            <a href="http://ikebukurofm.com/concept.html" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/offair.png"
                                    alt="offair"
                                    layout="fixed"
                                    loading="eager"
                                    placeholder="blurred"
                                    height={180}
                                    className="transition transform duration-300 hover:scale-110"
                                />
                            </a>
                        )}
                    </div>
                    <div className="max-md:hidden mb-20 ml-56">
                        {isOnair ? (
                            <a href="http://ikebukurofm.com/concept.html" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/onair.png"
                                    alt="onair"
                                    layout="fixed"
                                    loading="eager"
                                    placeholder="blurred"
                                    height={320}
                                    className="transition transform duration-300 hover:scale-110"
                                />
                            </a>
                        ) : (
                            <a href="http://ikebukurofm.com/concept.html" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/offair.png"
                                    alt="offair"
                                    layout="fixed"
                                    loading="eager"
                                    placeholder="blurred"
                                    height={320}
                                    className="transition transform duration-300 hover:scale-110"
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div className="absolute top-0 right-0">
                    <div className="md:hidden mt-32 mr-4">
                        <a href="https://t.co/9lxTcR3Dp7" target="_blank" rel="noopener noreferrer">
                            <StaticImage
                                src="../images/otayori.png"
                                alt="otayori"
                                layout="fixed"
                                loading="eager"
                                placeholder="blurred"
                                height={110}
                                className="transition transform duration-300 hover:scale-110"
                            />
                        </a>
                    </div>
                    <div className="max-md:hidden mt-36 mr-52">
                        <a href="https://t.co/9lxTcR3Dp7" target="_blank" rel="noopener noreferrer">
                            <StaticImage
                                src="../images/otayori.png"
                                alt="otayori"
                                layout="fixed"
                                loading="eager"
                                placeholder="blurred"
                                height={180}
                                className="transition transform duration-300 hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className="md:hidden mb-40 mr-4">
                        <a href="https://x.com/kagegonomi" target="_blank" rel="noopener noreferrer">
                            <StaticImage
                                src="../images/x_logo.png"
                                alt="x"
                                layout="fixed"
                                loading="eager"
                                placeholder="blurred"
                                height={60}
                                className="transition transform duration-300 hover:scale-110"
                            />
                        </a>
                    </div>
                    <div className="max-md:hidden mb-16 mr-72">
                        <a href="https://x.com/kagegonomi" target="_blank" rel="noopener noreferrer">
                            <StaticImage
                                src="../images/x_logo.png"
                                alt="x"
                                layout="fixed"
                                loading="eager"
                                placeholder="blurred"
                                height={80}
                                className="transition transform duration-300 hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/*WHAT'S NEW*/}
            <section className="relative overflow-hidden pt-24 pb-24 max-md:pt-12 max-md:pb-12" id="whats_new">
                <h2 className="text-center mb-6">
                    <StaticImage
                        src="../images/head_whatsnew.png"
                        alt="WHAT'S NEW | 新着情報"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
                    />
                </h2>
                <div className="max-w-5xl max-md:w-[85%] mx-auto">
                    <div className="inset-0 flex items-center justify-center mb-10 max-md:mb-6">
                        <div className="w-full mx-auto">
                            {data.allMicrocmsContents.edges.map((node) => (
                                <Link
                                    to={`/contents/${node.node.id}`}
                                    key={node.node.id}
                                    className="block p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
                                >
                                    <article key={node.node.id}>
                                        <p className="text-blue-600 text-sm font-bold mb-2">{node.node.createdAt}</p>
                                        <p className="text-base max-md:text-sm font-bold">{node.node.title}</p>
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
            {/*LATEST EPISODE*/}
            <section className="h-[860px] max-md:h-[420px] pt-24 max-md:pt-12 bg-[url('../images/bg_latest_episode.webp')] bg-no-repeat bg-center bg-fixed bg-cover overflow-hidden" id="latest_episode">
                <h2 className="text-center mb-16 max-md:mb-10">
                    <StaticImage
                        src="../images/head_latestepisode.png"
                        alt="LATEST EPISODE | 最新エピソード"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
                    />
                </h2>
                <div className="relative w-5xl max-md:w-[90%] mx-auto">
                    <div className="md:hidden relative w-[800px] max-md:w-[90%] mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/?list=UUQ11o0iwgUQ84MHMQtftoJQ"
                            title="latest episode"
                            width="100%"
                            height="172"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="relative w-5xl max-md:w-[90%] mx-auto">
                    <div className="max-md:hidden relative w-[800px] max-md:w-[90%] mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/?list=UUQ11o0iwgUQ84MHMQtftoJQ"
                            title="latest episode"
                            width="100%"
                            height="460"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
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
