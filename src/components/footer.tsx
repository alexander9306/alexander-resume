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
                  defaultMessage: "About me",
                  id: "cyQPkf",
                  description: "About me link on footer.",
                }),
              },
              {
                to: "/contact-me",
                name: intl.formatMessage({
                  defaultMessage: "Contact me",
                  id: "DLZ+8c",
                  description: "Contact me link on footer.",
                }),
              },
              {
                to: "/projects",
                name: intl.formatMessage({
                  defaultMessage: "Projects",
                  id: "1ZMKhf",
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
              id: "v/T4gy",
              description: "Email subject",
            })}&body=${intl.formatMessage({
              defaultMessage: "Sent from your website.",
              id: "Qft8Dg",
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
