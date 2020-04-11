import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input, Button, CardText } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Sidebar = ({ author, authorFluid }) => (
    <div>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        {author.name}
                    </CardTitle>
                    <CardText class="text-justify" style={{letterSpacing: `1px`}}>{author.bio}</CardText>
                    <div className="author-social-links text-center">
                        <ul>
                            <li>
                                <a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook">
                                    <FontAwesomeIcon icon={faFacebook} className="fa-lg"/>
                                </a>
                            </li>
                            <li>
                                <a href={author.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
                                    <FontAwesomeIcon icon={faInstagram} className="fa-lg"/>
                                </a>
                            </li>
                            <li>
                                <a href={author.github} target="_blank" rel="noopener noreferrer" className="github">
                                    <FontAwesomeIcon icon={faGithub} className="fa-lg"/>
                                </a>
                            </li>
                            <li>
                                <a href={author.pinterest} target="_blank" rel="noopener noreferrer" className="pinterest">
                                    <FontAwesomeIcon icon={faPinterest} className="fa-lg"/>
                                </a>
                            </li>
                            <li>
                                <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                                    <FontAwesomeIcon icon={faTwitter} className="fa-lg"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        )}
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Newsletter
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your email address..."/>
                    </FormGroup>
                    <Button className="btn-outline-primary text-uppercase" color="white">
                        Subscribe
                    </Button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Advertisement
                </CardTitle>
                <img src="https://via.placeholder.com/320x200" alt="advert" style={{width: '100%'}} />
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Recent Posts
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={data=>(
                    <div>
                        {data.allMarkdownRemark.edges.map(({node})=>(
                            <Card key={node.id}>
                                <Link to={node.fields.slug}>
                                    <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.frontmatter.path}>
                                            {node.frontmatter.title}
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}/>
            </CardBody>
        </Card>
    </div>
)

const sidebarQuery = graphql`
    query sidebarQuery{
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} limit: 3){
            edges{
                node{
                    id
                    frontmatter{
                        title
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default Sidebar