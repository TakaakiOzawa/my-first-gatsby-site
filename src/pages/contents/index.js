import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'

const ContentsPage = ({ data }) => {
    return (
        <Layout pageTitle="WHAT'S NEW">
            <div className="relative">
                <StaticImage
                    alt="Kagegonomi back image"
                    src="../../images/white_back_contents.jpg"
                    className="w-full"
                />
                <div className="absolute w-60 top-[3%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi WHAT'S NEW string"
                        src="../../images/Kagegonomi_whatsnew_string.png"
                        className="w-full"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl w-full mx-auto px-4">
                        {data.allMdx.nodes.map((node) => (
                            <Link
                                to={`/contents/${node.frontmatter.slug}`}
                                key={node.id}
                                className="block p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
                            >
                                <article key={node.id}>
                                    <p className="text-blue-600 text-sm font-bold mb-2">{node.frontmatter.date}</p>
                                    <p className="text-base font-bold">{node.frontmatter.title}</p>
                                </article>
                            </Link>
                        ))}
                    </div>
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
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY.MM.DD")
                    title
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="WHAT'S NEW" />

export default ContentsPage