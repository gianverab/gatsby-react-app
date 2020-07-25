import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

function Footer({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulLink {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `
  )
  return (
    <FooterGroup>
      {data.allContentfulLink.edges.map(edge => (
        <Link to={edge.node.url}>{edge.node.title}</Link>
      ))}
      {children}
    </FooterGroup>
  )
}

const FooterGroup = styled.div``

export default Footer
