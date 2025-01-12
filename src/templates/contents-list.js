import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ContentsList = ({ data, pageContext }) => {
    const { numPages, currentPage } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const prevPage = currentPage === 2 ? "/contents" : `/contents/${currentPage - 1}`;
    const nextPage = `/contents/${currentPage + 1}`;

    return (
        <Layout pageTitle="WHAT'S NEW">
            <div
                className="relative"
                style={{
                    height: `${data.allMdx.nodes.length * 80 + 200}px`,
                }}
            >
                <StaticImage
                    alt="Kagegonomi back image"
                    src="../images/white_back_contents.jpg"
                    className="w-full h-full"
                />
                <div className="absolute w-60 top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <StaticImage
                        alt="Kagegonomi WHAT'S NEW string"
                        src="../images/Kagegonomi_whatsnew_string.png"
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
                <div className="absolute bottom-4 w-full flex justify-center mt-2 space-x-2">
                    {!isFirst && (
                        <Link
                            to={prevPage}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
                        >
                            ←
                        </Link>
                    )}
                    {Array.from({ length: numPages }, (_, i) => {
                        const pageNumber = i + 1;

                        const shouldShow =
                        pageNumber === 1 ||
                        pageNumber === numPages ||
                        (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2);

                        const isEllipsisBefore =
                        pageNumber === currentPage - 3 && pageNumber !== 2;
                        const isEllipsisAfter =
                        pageNumber === currentPage + 3 && pageNumber !== numPages - 1;

                        return (
                            <React.Fragment key={pageNumber}>
                                {isEllipsisBefore && <span className="px-2">...</span>}
                                {shouldShow && (
                                    <Link
                                        to={pageNumber === 1 ? "/contents" : `/contents/${pageNumber}`}
                                        className={`px-4 py-2 border rounded-lg ${
                                        currentPage === pageNumber
                                            ? "bg-blue-500 text-white border-blue-500"
                                            : "border-gray-300 text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        {pageNumber}
                                    </Link>
                                )}
                                {isEllipsisAfter && <span className="px-2">...</span>}
                            </React.Fragment>
                        );
                    })}
                    {!isLast && (
                        <Link
                            to={nextPage}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
                        >
                            →
                        </Link>
                    )}
                </div>
            </div>
            <div className="text-sm bg-[#facc15] text-black p-4">
                Copyright © 2025 Kagegonomi All Rights Reserved.
            </div>
        </Layout>
    );
};

export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: { frontmatter: { date: DESC } }, skip: $skip, limit: $limit) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "YYYY.MM.DD")
                    slug
                }
            }
        }
    }
`;

export const Head = () => <Seo title="WHAT'S NEW" />

export default ContentsList;