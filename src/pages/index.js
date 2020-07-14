import React from "react"
import Hero from "../components/hero"

import Layout from "../layout"
import SEO from "../components/seo"
import Card from "../components/card"
import wallpaper from "../images/wallpaper.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          imgSrc={wallpaper}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
