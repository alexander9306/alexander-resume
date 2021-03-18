import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Container } from "react-bootstrap"
import { HeaderLinks, Links } from "./page-links"

const Header: React.FC = () => {
  const links: Links[] = [
    {
      to: "/",
      name: "Home",
    },

    {
      to: "projects-grid-cards",
      name: "Projects",
    },
    {
      to: "cv",
      name: "CV",
    },
    {
      to: "hire-me",
      name: "Hire me",
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
