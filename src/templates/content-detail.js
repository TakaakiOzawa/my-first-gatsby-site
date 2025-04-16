import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo'
import ShareButtonList from '../components/shareButtonList'

const ContentDetail = ({ data }) => {
    const { id, title, createdAt, content } = data.microcmsContents;

    return (
        <Layout pageTitle={title}>
            <div className="container mx-auto px-4 py-16">
                <section>
                    <article className="min-h-screen px-12 py-12 max-md:px-4 max-md:py-0 text-2xl">
                        <div className="mb-1">
                            <time className="text-blue-500 text-sm font-bold antialiased">
                                {createdAt}
                            </time>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-sm md:text-lg font-bold">
                                {title}
                            </h3>
                        </div>
                        <ShareButtonList title={title} id={id} />
                        <div
                            className="prose prose-sm lg:prose-lg max-w-full"
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
            id
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