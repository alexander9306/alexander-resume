import * as React from "react"

import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () => {
  const intl = useIntl()

  const notFound = intl.formatMessage({
    defaultMessage: "404: Not found",
    description: "SEO: Not found.",
    id: "U8XBaR",
  })
  return (
    <Layout>
      <SEO title={notFound} lang={intl.locale} />
      <section className="portfolio-block block-intro">
        <div
          className="container"
          style={{ paddingBottom: "30vh", paddingTop: "20vh" }}
        >
          <h1>{notFound}</h1>
          <p>
            <FormattedMessage
              defaultMessage="You just hit a route that doesn't exist... :("
              description="Not found information message"
              id="LInAss"
            />
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
