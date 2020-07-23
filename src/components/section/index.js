import React from "react"
import styled from "styled-components"
import Wave from "../wave"

const Section = ({ img, logo, title, desc, text, children }) => (
  <>
    <SectionGroup img={img}>
      <WaveTop>
        <Wave />
      </WaveTop>

      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionDesc>{desc}</SectionDesc>
      </SectionTitleGroup>
      <SectionText>{text}</SectionText>
      <WaveBottom>
        <Wave />
      </WaveBottom>
    </SectionGroup>
    {children}
  </>
)

const SectionGroup = styled.div`
  background: url(${props => props.img});
  height: 700px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto 200px;
  grid-gap: 20px;

  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;
  margin: 0 40px;
  grid-gap: 20px;
  color: #ffffff;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const SectionTitle = styled.h3`
  margin: 0;
  font-size: 60px;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`
const SectionDesc = styled.p`
  line-height: 1.5;
`
const SectionText = styled.p`
  text-align: center;
  align-self: start;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -5px;
`
const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -5px;
  transform: rotate(180deg);
`
export default Section
