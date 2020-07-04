import React from "react"
import { Link } from "gatsby"

const Hero = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>
        Learn to design and code <br /> <span>React apps</span>
      </h1>
      <p>
        Complete courses about the best tools and design systems. Prototype and
        build apps with React.
      </p>
      <Link to="/page-2/">Watch the video</Link>
    </div>
  </div>
)

export default Hero
