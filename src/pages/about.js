import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>カゲゴノミについて紹介</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage