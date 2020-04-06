import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
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
      <script src="https://kit.fontawesome.com/ea3e93cd21.js" crossOrigin="anonymous"></script>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container" id="content">{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
