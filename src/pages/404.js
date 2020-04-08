import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout pageTitle="Oops, something went wrong...">
    <SEO title="404: Not found" />
    <p>
      This URL doesn't exist <FontAwesomeIcon icon={faSadTear}/>
    </p>
    <Link to={'/'} class="btn btn-primary text-uppercase">Go to homepage</Link>
  </Layout>
)

export default NotFoundPage
