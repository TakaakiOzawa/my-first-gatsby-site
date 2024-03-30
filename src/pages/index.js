import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'

const IndexPage = () => {
    return (
        <Layout pageTitle="Index">
            <StaticImage
                alt="Kagegonomi TOP image 1"
                src="../images/20240323001.png"
            />
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