import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <Card>
            <Link to={slug}>
                <Img className="card-image-top" fluid={fluid}/>
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={slug} style={{color: 'black', fontWeight: 'bold'}}>{title}</Link>
                </CardTitle>
                <CardSubtitle style={{marginBottom: '10px'}}>
                    <span className="text-info">{date}</span><br />
                    Author <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag => (
                        <li key={tag}>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge style={{padding: '5px 8px', fontWeight: '200', fontSize: '13px'}} color="primary">
                                    {tag}
                                </Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={slug} className="btn btn-outline-primary float-right">Read more</Link>
            </CardBody>
        </Card>
    )
}

export default Post
