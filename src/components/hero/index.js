import React from "react"
import { Link } from "gatsby"
import sketch from "../../images/logo-sketch.png"
import figma from "../../images/logo-figma.png"
import studio from "../../images/logo-studio.png"
import framer from "../../images/logo-framer.png"
import react from "../../images/logo-sketch.png"
import swift from "../../images/logo-swift.png"
import wallpaper3 from "../../images/wallpaper3.jpg"
import Wave from "../wave"
import styled from "styled-components"

const Hero = () => (
  <HeroContainer>
    <HeroGroup>
      <h1>
        Learn to <br /> design and code <span>React apps</span>
      </h1>
      <p>
        Complete courses about the best tools and design systems. Prototype and
        build apps with React.
      </p>
      <Link to="/page-2/">Watch the video</Link>
      <HeroLogos>
        <img src={sketch} alt="Sketch" width="50" />
        <img src={figma} alt="Figma" width="50" />
        <img src={studio} alt="Studio" width="50" />
        <img src={framer} alt="Framer" width="50" />
        <img src={react} alt="React" width="50" />
        <img src={swift} alt="Swift" width="50" />
      </HeroLogos>
      <Wave />
    </HeroGroup>
  </HeroContainer>
)

const HeroContainer = styled.div`
  background: url(${wallpaper3});
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 20px;
  }

  h1 {
    margin: 0;
    color: #ffffff;
    font-size: 60px;
    line-height: 1.2;
    opacity: 0;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 640px) {
      font-size: 40px;
    }
  }

  span {
    color: rgba(84, 157, 255, 0.75);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
    animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }

  a {
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    padding: 9px 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      color: #000000;
      background: #ffffff;
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
const HeroLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 100px 0;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Hero
