import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <section className="portfolio-block block-intro">
      <div className="container">
        <div
          className="avatar"
          style={{backgroundImage:"url('assets/img/avatars/avatar.jpg')"}}
        />
        <div className="about-me">
          <p>
            Hello! I am <strong>John Smith</strong>. I work as interface and
            front end developer. I have passion for pixel perfect, minimal and
            easy to use interfaces.
          </p>
          <a className="btn btn-outline-primary" role="button" href="#kh">
            Hire me
          </a>
        </div>
      </div>
    </section>
    <section className="portfolio-block photography">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 col-lg-4 item zoom-on-hover">
            <a href="#kk">
              <img
                className="img-fluid image"
                src="assets/img/nature/image5.jpg"
              />
            </a>
          </div>
          <div className="col-md-6 col-lg-4 item zoom-on-hover">
            <a href="#">
              <img
                className="img-fluid image"
                src="assets/img/nature/image2.jpg"
              />
            </a>
          </div>
          <div className="col-md-6 col-lg-4 item zoom-on-hover">
            <a href="#">
              <img
                className="img-fluid image"
                src="assets/img/tech/image4.jpg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio-block call-to-action border-bottom">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center content">
          <h3>Like what you see?</h3>
          <button className="btn btn-outline-primary btn-lg" type="button">
            Hire me
          </button>
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
                <i className="icon ion-ios-star-outline" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Web Design</h3>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card special-skill-item border-0">
              <div className="card-header bg-transparent border-0">
                <i className="icon ion-ios-lightbulb-outline" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Interface Design</h3>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card special-skill-item border-0">
              <div className="card-header bg-transparent border-0">
                <i className="icon ion-ios-gear-outline" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Photography and Print</h3>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio-block website gradient">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-5 offset-lg-1 text">
                    <h3>Website Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl vel, porttitor eros.</p>
                </div>
                <div className="col-md-12 col-lg-5">
                    <div className="portfolio-laptop-mockup">
                        <div className="screen">
                            <div className="screen-content" style={{backgroundImage:"url(&quot;assets/img/tech/image6.png&quot;)"}} />
                        </div>
                        <div className="keyboard" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
