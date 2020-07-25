import React from "react"
import Hero from "../components/hero"

import Layout from "../layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Cell from "../components/cell"
import Section from "../components/section"
import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import wallpaper3 from "../images/wallpaper3.jpg"
import wallpaper4 from "../images/wallpaper4.jpg"

import logoReact from "../images/logo-react.png"
import styled from "styled-components"
import reactData from "../data/react-course.json"

const courses = [
  {
    title: "React for Designers",
    desc:
      "Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.",
    text: "12 sections - 6 hours",
    img: wallpaper2,
    id: "001",
  },
  {
    title: "Design System",
    desc: "",
    text: "10 sections",
    img: wallpaper,
    id: "002",
  },
  {
    title: "Sound Design",
    desc: "",
    text: "5 sections",
    img: wallpaper3,
    id: "003",
  },
  {
    title: "ARKit 2",
    desc: "",
    text: "9 sections",
    img: wallpaper4,
    id: "004",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Cards>
      <h2>11 courses, more coming</h2>
      <CardGroup>
        {courses.map(course => (
          <Card
            title={course.title}
            text={course.text}
            img={course.img}
            key={course.id}
          />
        ))}
      </CardGroup>
    </Cards>
    <Section
      img={wallpaper2}
      logo={logoReact}
      title="React for Designers"
      desc="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      text="12 sections - 6 hours"
    >
      <SectionContentWrapper>
        <SectionContent>
          {reactData.sections.map(section => (
            <Cell
              key={section.id}
              image={section.image}
              title={section.title}
            />
          ))}
        </SectionContent>
      </SectionContentWrapper>
    </Section>
  </Layout>
)

const Cards = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const SectionContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  padding: 0px 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export default IndexPage
