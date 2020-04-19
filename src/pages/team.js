import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../util/authors'
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import johnImage from '../images/john.jpg'
import janeImage from '../images/jane.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => {
  const john = authors[0];
  const jane = authors[1];
  return(
    <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `application`, 'react']}/>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={johnImage} style={{ maxWidth: '100%' }} alt="john profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
            <CardBody>
              <CardTitle>{john.name}</CardTitle>
              <CardText>{john.bio}</CardText>
              <Button color="primary" href={`/author/${slugify(john.name)}`}>View posts</Button>
            </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={janeImage} style={{ maxWidth: '100%' }} alt="jane profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
            <CardBody>
              <CardTitle>{jane.name}</CardTitle>
              <CardText>{jane.bio}</CardText>
              <Button color="primary" href={`/author/${slugify(jane.name)}`}>View posts</Button>
            </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
  )
}

export default TeamPage
