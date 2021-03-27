import * as React from "react"
import { Link } from "gatsby-plugin-react-intl"

interface LinksProps {
  links: Links[]
}

export interface Links {
  to: string
  name: string
  className?: string
}

export const HeaderLinks: React.FC<LinksProps> = ({ links }) => (
  <ul className="navbar-nav ms-auto">
    {links.map(link => (
      <li className="nav-item" key={link.to}>
        <Link
          className={`nav-link active ${link.className ?? ""}`}
          to={link.to}
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
)

export const PageLinks: React.FC<LinksProps> = ({ links }) => (
  <>
    {links.map(link => (
      <Link className={link.className} to={link.to} key={link.to}>
        {link.name}
      </Link>
    ))}
  </>
)
