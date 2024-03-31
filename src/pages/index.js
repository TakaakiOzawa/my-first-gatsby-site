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
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi ABOUT image"
                    src="../images/Kagegonomi_about.jpg"
                    className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    ABOUT
                    <br/>
                    人気パーソナリティー「DJ浅い人間」が、<br/>
                    毎週土曜深夜24時から池袋FMより<br/>
                    根暗な独身の日頃の鬱憤を代弁する激動の30分！<br/>
                </div>
            </div>
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi PROFILE image"
                    src="../images/okumono_tulip17.png"
                    className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    PARSONALITY
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <StaticImage
                                alt="Kagegonomi DJ AsaiNingen image"
                                src="../images/Kagegonomi_DJ_AsaiNingen_up.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-blue-500 text-white p-4">
                This is a styled component using Tailwind CSS.
            </div>
            <p>サイト構成</p>
            <p>複数ページに分岐するのではなく、Index1枚でなるべく完結するように</p>
            <p>ページ分岐はBackNumber,News,※Blogくらい？</p>
            <ul>
                <li>/</li>
                <ul>
                    <li>TOP画像</li>
                    <ul>
                        <li>1枚画またはgif(荒川豪雨,透明彼女の高速、レトロエフェクト)</li>
                        <li>カゲゴノミロゴ</li>
                        <li>池袋FM 毎週土曜23:00~23:30</li>
                        <li>※ONAIR中は目を引くアニメーション画像の視聴リンク表示</li>
                    </ul>
                    <li>視聴リンク(画像)</li>
                    <ul>
                        <li>画像内に視聴方法の旨(放送時間内(23時)にリンク先の再生ボタンをクリック)</li>
                    </ul>
                    <li>投稿フォームリンク(画像)</li>
                    <li>About</li>
                    <ul>
                        <li>カゲゴノミについて紹介</li>
                        <ul>
                            <li>※背景固定(毎日限界の車窓)、テキストだけスクロール</li>
                        </ul>
                        <li>DJ浅い人間の紹介</li>
                    </ul>
                    <li>最新回</li>
                    <ul>
                        <li>Youtube版では権利上楽曲の再生はカットされている旨</li>
                        <li>最新回のYoutubeリンク</li>
                        <li>BackNumberリンク(画像)</li>
                    </ul>
                    <li>ニュース</li>
                    <ul>
                        <li>各1行または矩形コンテンツ形式で表示</li>
                        <li>各ニュースページへリンク</li>
                    </ul>
                    <li>リンク</li>
                    <ul>
                        <li>池袋FM</li>
                        <li>Twitter</li>
                    </ul>
                </ul>
                <li>BackNumber</li>
                <ul>
                    <li>矩形コンテンツ形式で過去放送のYoutubeリンク一覧</li>
                </ul>
                <li>News</li>
                <ul>
                    <li>Blog形式で各News表示</li>
                </ul>
            </ul>

            <p>検討</p>
            <ul>
                <li>サイト全体の色相、雰囲気</li>
                <li>デザイン、素材作成技術</li>
                <li>運用方法</li>
            </ul>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage