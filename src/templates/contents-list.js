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
            <div className="container mx-auto px-4 pt-16 pb-8">
                <section>
                    <h2 className="text-center mt-20 max-md:mt-6 max-md:mb-4">
                        <StaticImage
                            src="../images/head_whatsnew.png"
                            alt="WHAT'S NEW | 新着情報"
                            height={60}
                            layout="fixed"
                            className="block mx-auto"
                        />
                    </h2>
                    <div className="min-h-screen px-12 py-12 max-md:px-2 max-md:py-0 text-xl max-md:text-base">
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
                        <div className="bottom-4 w-full flex justify-center mt-4 space-x-2">
                            {!isFirst && (
                                <Link
                                    to={prevPage}
                                    className="px-4 py-2 rounded-sm text-gray-600 hover:bg-gray-100"
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
                                                className={`px-4 py-2 rounded-sm ${currentPage === pageNumber
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
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
                                    className="px-4 py-2 rounded-sm text-gray-600 hover:bg-gray-100"
                                >
                                    →
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMicrocmsContents(sort: { createdAt: DESC }, skip: $skip, limit: $limit) {
            edges {
                node {
                    id
                    title
                    createdAt(formatString: "YYYY.MM.DD")
                    category {
                        name
                    }
                }
            }
        }
    }
`;

export const Head = () => (
    <Seo title="WHAT'S NEW | カゲゴノミ" />
)

export default ContentsList;