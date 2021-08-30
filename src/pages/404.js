import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>We're remodeling. You may have just clicked a link to a page that doesn't exist anymore. No worries! Click <Link to="/" className="text-blue-600">this link</Link> to go back to our home page.</p>
  </Layout>
)

export default NotFoundPage
