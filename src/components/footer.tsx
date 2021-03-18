import * as React from "react"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"
import { PageLinks } from "./page-links"

const Footer: React.FC = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="links">
        <PageLinks
          links={[
            {
              to: "about-me",
              name: "About me",
            },
            {
              to: "contact-me",
              name: "Contact me",
            },
            {
              to: "projects",
              name: "Projects",
            },
          ]}
        />
      </div>
      © {new Date().getFullYear()}
      <div className="social-icons">
        <a href="facebook.com">
          <IoLogoFacebook className="icon ion-social-facebook" />
        </a>
        <a href="instagram.com">
          <IoLogoInstagram />
        </a>
        <a href="twitter.com">
          <IoLogoTwitter />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
