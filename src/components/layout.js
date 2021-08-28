/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Nav />
      <div
        className="px-8 sm:px-24 pt-6 max-w-96 mx-auto box-border" 
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
