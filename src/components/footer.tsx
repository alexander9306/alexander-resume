import * as React from "react"
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { useIntl } from "gatsby-plugin-intl"
import { PageLinks } from "./page-links"

const Footer: React.FC<{ id?: string }> = ({ id }) => {
  const intl = useIntl()
  return (
    <footer id={id} className="page-footer">
      <div className="container">
        <div className="links">
          <PageLinks
            links={[
              {
                to: "/about-me",
                name: intl.formatMessage({
                  id: "footer-links.about_me",
                  defaultMessage: "About me",
                  description: "About me link on footer.",
                }),
              },
              {
                to: "/contact-me",
                name: intl.formatMessage({
                  id: "footer-links.contact_me",
                  defaultMessage: "Contact me",
                  description: "Contact me link on footer.",
                }),
              },
              {
                to: "/projects",
                name: intl.formatMessage({
                  id: "footer-links.project",
                  defaultMessage: "Projects",
                  description: "Projects link on footer.",
                }),
              },
            ]}
          />
        </div>
        © {new Date().getFullYear()}
        <div className="social-icons">
          <a href="facebook.com">
            <IoLogoLinkedin />
          </a>
          <a href="instagram.com">
            <IoLogoGithub />
          </a>
          <a href="/">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
