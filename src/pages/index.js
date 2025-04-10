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
                <h1>
                    <div className="hidden">
                        カゲゴノミ
                    </div>
                </h1>
                <StaticImage
                    src="../images/kagegonomi_mainvisual_temp.png"
                    alt="kagegonomi main visual"
                    layout="fullWidth"
                    placeholder="blurred"
                    className="w-full h-auto"
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-24 flex flex-row items-center">
                    <StaticImage
                        src="../images/ikebukurofm.png"
                        alt="ikebukurofm"
                        layout="fixed"
                        placeholder="blurred"
                        height={40}
                    />
                    <StaticImage
                        src="../images/datetime.png"
                        alt="datetime"
                        layout="fixed"
                        placeholder="blurred"
                        height={40}
                    />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
                    <StaticImage
                        src="../images/title_kagegonomi.png"
                        alt="kagegonomi title"
                        layout="fixed"
                        placeholder="blurred"
                        height={160}
                    />
                </div>
            </section>
            {/*WHAT'S NEW*/}
            <section className="relative pt-[100px] pb-[100px]" id="whats_new">
                <h2 className="text-center mb-[80px]">
                    <StaticImage
                        src="../images/head_whatsnew.png"
                        alt="WHAT'S NEW | 新着情報"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
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
            {/*LATEST EPISODE*/}
            <section className="h-[800px] pt-[100px] bg-[url('../images/bg_latest_episode.jpg')] bg-no-repeat bg-center bg-fixed bg-cover" id="latest_episode">
                <h2 className="text-center mb-[80px]">
                    <StaticImage
                        src="../images/head_latestepisode.png"
                        alt="LATEST EPISODE | 最新回"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
                    />
                </h2>
                <div className="relative w-[960px] mx-auto">
                    <div className="relative w-[800px] mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/?list=UUQ11o0iwgUQ84MHMQtftoJQ"
                            title="latest episode"
                            width="100%"
                            height="400"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
            <div className="h-[600px] bg-[url('../images/bg1.jpg')] bg-no-repeat bg-center bg-fixed bg-cover"></div>
            {/*ABOUT*/}
            <section className="h-[800px] pt-[100px] bg-[url('../images/bg_about.jpg')] bg-no-repeat bg-center bg-fixed bg-cover" id="about">
                <h2 className="text-center mb-[82px]">
                    <StaticImage
                        src="../images/head_about.png"
                        alt="ABOUT | カゲゴノミとは"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
                    />
                </h2>
                <div className="relative w-[960px] mx-auto">
                    <div>
                        <p className="text-[18px] block pt-[14px] text-[#fff]">
                            お前ら、年収はいくらだ？500万？ハッ笑わせるなぁ、これだから貧乏人との会話は止められないよ。たった500万じゃあ、幸せどころか不幸せも買えないんじゃないかぁ？光進丸の模型売ってやるからあっちいけよ。
                        </p>
                    </div>
                </div>
            </section>
            {/*PARSONALITY*/}
            <section className="relative pt-[100px] pb-[80px]" id="parsonality">
                <h2 className="text-center mb-[80px]">
                    <StaticImage
                        src="../images/head_parsonality.png"
                        alt="PARSONALITY | パーソナリティー"
                        height={60}
                        layout="fixed"
                        className="block mx-auto"
                    />
                </h2>
                <div className="relative w-[1280px] mx-auto">
                    <div className="table w-full pb-[80px]">
                        <div className="table-cell align-top w-1/2">
                            <StaticImage
                                src="../images/pct_parsonality.jpg"
                                alt="dj_asainingen"
                                layout="fullWidth"
                                placeholder="blurred"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="table-cell align-top pl-[60px]">
                            <h3 className="block text-[28px] mb-[26px] my-[1em] mx-0 font-bold">
                                DJ浅い人間
                            </h3>
                            <div className="pr-[90px]">
                                <p className="text-[18px] block pt-[14px]">
                                    誰が登ってよいと言った？お前らの仕事はなあ、船底にこびり付いたフジツボの除去だ。息が続かなくなったら皆の邪魔にならないよう、そっと海底に沈め。
                                </p>
                            </div>
                        </div>
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