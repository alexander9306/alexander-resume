import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"

// Styles
import "./style.scss"
import "./layout.scss"
import "@fontsource/lato/300.css"
import "@fontsource/lato/400.css"
import "@fontsource/lato/700.css"

const Layout: React.FC = ({ children }) => (
  <div id="page-container">
    <div id="content-wrap">
      <Header />
      <main className="page lanidng-page">{children}</main>
    </div>
    <Footer id="footer" />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
