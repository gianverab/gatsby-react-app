import React from "react"
import "./index.css"

const Card = ({ title, text, imgSrc }) => (
  <div className="card">
    <img src={imgSrc} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default Card
