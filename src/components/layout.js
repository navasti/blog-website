import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import Header from "./header"
import "../styles/index.scss"
import { Row, Col } from 'reactstrap'
import Sidebar from "./Sidebar"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4"><Sidebar/></Col>
        </Row>
      </main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
