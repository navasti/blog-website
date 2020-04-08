import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Card, Badge, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter;
    return (
    <Layout pageTitle={post.title}>
        <SEO title={post.title}/>
            <Card>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                <CardBody>
                    <CardSubtitle style={{marginBottom: '10px'}}>
                        <span className="text-info">{post.date}</span><br />
                        Author <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
                    <ul className="post-tags">
                        {post.tags.map(tag=>(
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge style={{padding: '5px 8px', fontWeight: '200', fontSize: '13px'}} color="primary">
                                        {tag}
                                    </Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost
