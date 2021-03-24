import * as React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import { Navbar, Container } from "react-bootstrap"
import { HeaderLinks, Links } from "./page-links"

const Header: React.FC = () => {
  const intl = useIntl()
  const links: Links[] = [
    {
      to: "/",
      name: intl.formatMessage({
        id: "header-links.home",
        defaultMessage: "Home",
        description: "Home link on header.",
      }),
    },

    {
      to: "/projects-grid-cards",
      name: intl.formatMessage({
        id: "header-links.project_header",
        defaultMessage: "Projects",
        description: "Projects link on header.",
      }),
    },
    {
      to: "/cv",
      name: intl.formatMessage({
        id: "header-links.cv",
        defaultMessage: "CV",
        description: "CV link on header.",
      }),
    },
    {
      to: "/hire-me",
      name: intl.formatMessage({
        id: "header-links.hire_me",
        defaultMessage: "Hire me",
        description: "Hire me link on header.",
      }),
    },
  ]
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="dark"
        className="fixed-top portfolio-navbar gradient"
      >
        <Container>
          <Link to="/" className="navbar-brand logo">
            Alexander Damaso
          </Link>

          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav">
            <HeaderLinks links={links} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
