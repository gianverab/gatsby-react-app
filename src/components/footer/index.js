import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              id
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <FooterGroup>
      <Text>
        Tweet "Prototype and build apps with React. New courses by @designcode"
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
          <Link to={edge.node.url} key={edge.node.id}>
            {edge.node.title}
          </Link>
        ))}
      </LinkGroup>
      <CopyText>
        © {new Date().getFullYear()} {data.site.siteMetadata.title}
      </CopyText>
    </FooterGroup>
  )
}

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 640px) {
    max-width: 360px;
  }
`
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  max-width: 500px;
  min-width: 300px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`
const CopyText = styled.p`
  font-size: 16px;
  text-align: center;
`

export default Footer
