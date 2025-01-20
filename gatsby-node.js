const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMicrocmsContents {
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
    `);

    result.data.allMicrocmsContents.edges.forEach(({ node }) => {
        createPage({
            path: `/contents/${node.id}`,
            component: path.resolve(`./src/templates/content-detail.js`),
            context: {
                id: node.id,
            },
        });
    });

    const posts = result.data.allMicrocmsContents.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? "/contents" : `/contents/${i + 1}`,
            component: path.resolve("./src/templates/contents-list.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
};