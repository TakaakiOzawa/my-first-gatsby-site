import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo'

const ContentDetail = ({ data }) => {
    const { title, createdAt, category, content } = data.microcmsContents;

    return (
        <Layout pageTitle={title}>
            <div className="container mx-auto px-4 py-[70px]">
                <section>
                    <article className="min-h-screen py-12 px-12 text-[1.4rem]">
                        <div className="mb-[6px]">
                            <time className="text-blue-500 text-[0.9rem] font-bold antialiased">
                                {createdAt}
                            </time>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[1.1rem] font-bold leading-[1.4]">
                                {title}
                            </h3>
                        </div>
                        <div className="mb-12 border-b border-gray-300" />
                        {/*{category && <p className="text-blue-500">{category.name}</p>}*/}
                        <div
                            className="prose prose-sm lg:prose-lg"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </article>
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        microcmsContents(id: { eq: $id }) {
            title
            createdAt(formatString: "YYYY.MM.DD")
            category {
                name
            }
            content
        }
    }
`;

export const Head = ({ data }) => {
    const { title } = data.microcmsContents;
    return <Seo title={title} />;
};

export default ContentDetail;