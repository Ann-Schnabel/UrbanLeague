import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-6xl leading-relaxed font-black">Empowering Communities.<br />Changing Lives.</h1>
  </Layout>
)

export default IndexPage
