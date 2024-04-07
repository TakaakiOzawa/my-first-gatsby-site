import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'

const IndexPage = () => {
    return (
        <Layout pageTitle="Index">
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi TOP image"
                    src="../images/Kagegonomi_top.jpg"
                    className="w-full"
                />
                <div className="absolute w-96 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi TOP Logo image"
                        src="../images/Kagegonomi_logo_2.png"
                        className="w-full h-full transform -skew-y-12"
                    />
                </div>
                <div className="absolute w-96 mt-16 ml-4 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="IkebukuroFM TOP image"
                        src="../images/IkebukuroFM_top.png"
                        className="w-full h-full transform -skew-y-12"
                    />
                </div>
                <div className="absolute w-96 top-3/4">
                    <button className="btn btn-accent">池袋FM視聴リンク</button>
                    <button className="btn glass">番組への投稿フォーム</button>
                </div>
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
                    根暗な独身の日頃の鬱憤を代弁する激動の30分！<br/>
                </div>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi PROFILE image"
                    src="../images/okumono_tulip15.png"
                    className="w-full"
                />
                <div className="absolute w-60 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                <div className="absolute w-80 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi LATEST CHAPTER string"
                        src="../images/Kagegonomi_latest_chapter_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute mt-8 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <iframe
                        src="https://open.spotify.com/embed/show/621SiGP64AMkIrYT4I0loR?utm_source=generator"
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
                    alt="Kagegonomi X back image"
                    src="../images/black_back.jpg"
                    className="w-full"
                />
                {/* <div className="absolute">
                    <a className="twitter-timeline" href="https://twitter.com/kagegonomi?ref_src=twsrc%5Etfw">Tweets by kagegonomi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div> */}
            </div>

            <div className="text-sm bg-[#facc15] text-black p-4">
                Copyright © 2024 Kagegonomi All Rights Reserved.
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage