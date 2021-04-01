import * as React from "react"
import { Link, useIntl } from "gatsby-plugin-react-intl"
import { Navbar, Container } from "react-bootstrap"
import { HeaderLinks, Links } from "./page-links"

const Header: React.FC = () => {
  const intl = useIntl()
  const links: Links[] = [
    {
      to: "/",
      name: intl.formatMessage({
        id: "1E51p8",
        defaultMessage: "Home",
        description: "Home link on header.",
      }),
    },

    {
      to: "/projects-grid-cards",
      name: intl.formatMessage({
        id: "gM/ef/",
        defaultMessage: "Projects",
        description: "Projects link on header.",
      }),
    },
    {
      to: "/cv",
      name: intl.formatMessage({
        id: "Wbtjsk",
        defaultMessage: "CV",
        description: "CV link on header.",
      }),
    },
    {
      to: "/hire-me",
      name: intl.formatMessage({
        id: "jHGxHB",
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
