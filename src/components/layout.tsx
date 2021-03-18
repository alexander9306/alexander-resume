/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"

// Styles
import "./style.scss"
// import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/lato/300.css"
import "@fontsource/lato/400.css"
import "@fontsource/lato/700.css"

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
      <main className="page lanidng-page">{children}</main>
      <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
