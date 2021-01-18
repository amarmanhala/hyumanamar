import React from "react"
import { Helmet } from "react-helmet"

export default function SEO() {
  return (
    <>
      <Helmet>
        <title>Amarpreet Singh / Front-end developer, Designer</title>
        <meta
          name="description"
          content="The personal portfolio of Amarpreet Singh, a Front-end developer and UI designer."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hyumanamar" />
        <meta name="twitter:creator" content="@hyumanamar" />
        <meta name="twitter:url" content="https://twitter.com/hyumanamar" />
        <meta
          name="twitter:title"
          content="The personal portfolio of Amarpreet Singh, a Front-end developer and UI designer."
        />
        <meta name="twitter:image" content="../images/twitter-card.png" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#ffc600" />
      </Helmet>
    </>
  )
}
