import * as React from "react"
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5"
import { useIntl } from "gatsby-plugin-react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { PageLinks } from "./page-links"

const Footer: React.FC<{ id?: string }> = ({ id }) => {
  const intl = useIntl()
  const { site } = useStaticQuery<GatsbyTypes.FooterLinksQuery>(graphql`
    query FooterLinks {
      site {
        links: siteMetadata {
          linkedIn
          github
          email
        }
      }
    }
  `)
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
        <div className="social-icons pb-2">
          <a href={site?.links?.linkedIn}>
            <IoLogoLinkedin />
          </a>
          <a href={site?.links?.github}>
            <IoLogoGithub />
          </a>
          <a
            href={`mailto:${
              site?.links?.email ?? "noemail@noreply.com"
            }?subject=${intl.formatMessage({
              defaultMessage: "Job offer",
              description: "Email subject",
            })}&body=${intl.formatMessage({
              defaultMessage: "Sent from your website.",
              description: "Email body",
            })}`}
          >
            <IoMail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
