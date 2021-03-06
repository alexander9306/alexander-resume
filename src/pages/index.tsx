import * as React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"
import {
  IoStarOutline,
  IoBulbOutline,
  IoSettingsOutline,
} from "react-icons/io5"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  const hireMeBtnText = intl.formatMessage({
    defaultMessage: "Hire me",
    description: "Home: Hire me button",
  })

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({
          defaultMessage: "Home",
          description: "SEO: Home title",
        })}
        lang={intl.locale}
      />

      <section className="portfolio-block block-intro">
        <div className="container">
          <StaticImage
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "auto",
              borderRadius: 100,
              marginBottom: 30,
            }}
            src="../images/avatars/PXL_20210324_011943234_2.jpg"
            alt={intl.formatMessage({
              defaultMessage: "Me",
              description: "Home: Avatar alt information",
            })}
            placeholder="blurred"
            width={150}
            height={150}
            quality={95}
          />
          <div className="about-me">
            <p>
              <FormattedMessage
                defaultMessage="Hello! I am {my_name}. I work as a Full-stack Developer. I create performance-oriented applications with a responsive design."
                description="Home: Message about myself"
                values={{
                  my_name: <strong>Alexander Damaso</strong>,
                }}
              />
            </p>
            <Link
              className="btn btn-outline-primary"
              role="button"
              to="/hire-me"
            >
              {hireMeBtnText}
            </Link>
          </div>
        </div>
      </section>
      {/*       
      <section className="portfolio-block photography">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <Link to="project/source">
                <StaticImage
                  src="../images/nature/image5.jpg"
                  alt="A Gatsby astronaut"
                  imgClassName="img-fluid image"
                  layout="fullWidth"
                />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <Link to="/to">
                <StaticImage
                  src="../images/nature/image2.jpg"
                  alt="A Gatsby astronaut"
                  imgClassName="img-fluid image"
                  layout="fullWidth"
                />
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <Link to="/kl">
                <StaticImage
                  src="../images/nature/image4.jpg"
                  alt="A Gatsby astronaut"
                  imgClassName="img-fluid image"
                  layout="fullWidth"
                />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="portfolio-block call-to-action border-bottom">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center content">
            <h3>Like what you see?</h3>
            <Link className="btn btn-outline-primary btn-lg" to="/hire-me">
              {hireMeBtnText}
            </Link>
          </div>
        </div>
      </section>

      <section className="portfolio-block skills">
        <div className="container">
          <div className="heading">
            <h2>Special Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <IoStarOutline
                    className="icon"
                    style={{
                      strokeWidth: "100px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Design</h3>
                  <p className="card-text">
                    <FormattedMessage
                      defaultMessage="Design websites that can be easily accessed from either PC or mobile is my passion. Let's face it "
                      description="Home: Web Desing: message"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <IoBulbOutline className="icon" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Interface Design</h3>
                  <p className="card-text">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <IoSettingsOutline className="icon" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Photography and Print</h3>
                  <p className="card-text">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-block website gradient pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5 offset-lg-1 text">
              <h3>Website Project</h3>
              <p>
                <FormattedMessage
                  defaultMessage="Design websites that can be easily accessed from either PC or mobile is my passion."
                  description="Home: Web Desing: message"
                />
              </p>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="portfolio-laptop-mockup">
                <div className="screen">
                  <StaticImage
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100%",
                      margin: "auto",
                      border: "1px solid #c5c5c5",
                    }}
                    src="../images/webpage1.png"
                    alt={intl.formatMessage({
                      defaultMessage: "Website screenshot",
                      description: "Home: Laptop info",
                    })}
                    placeholder="blurred"
                  />
                </div>
                <div className="keyboard" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
