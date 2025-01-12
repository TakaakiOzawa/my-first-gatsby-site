const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMdx(sort: { frontmatter: { date: DESC } }) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    const posts = result.data.allMdx.nodes;
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