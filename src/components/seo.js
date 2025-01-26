import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
    const data = useStaticQuery (
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    if (title === "TOP")
    {
        return (
            <title>{data.site.siteMetadata.title}</title>
        )
    }
    else
    {
        return (
            <title>{title} | {data.site.siteMetadata.title}</title>
        )
    }
}

export default Seo