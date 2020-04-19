import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;

    return (
        <Layout pageTitle="All tags">
            <SEO title="All tags" keywords={['tags, topic']}/>
            <ul style={{ marginBottom: '25px' }}>
                {tags.map(tag=>(
                    <li key={tag} style={{ display: 'inline-block', margin: '0 10px 10px 0' }}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag}: {tagPostCounts[tag]}
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default tagsPage
