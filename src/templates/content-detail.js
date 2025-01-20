import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo'

const ContentDetail = ({ data }) => {
    const { title, createdAt, category } = data.microcmsContents;

    return (
        <Layout pageTitle={title}>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-600">{createdAt}</p>
                {category && <p className="text-blue-500">{category.name}</p>}
            </div>
            <div className="text-sm bg-[#facc15] text-black p-4">
                Copyright © 2025 Kagegonomi All Rights Reserved.
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
        }
    }
`;

export const Head = ({ data }) => {
    const { title } = data.microcmsContents;
    return <Seo title={title} />;
};

export default ContentDetail;