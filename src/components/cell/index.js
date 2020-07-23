import React from "react"
import styled from "styled-components"

const Cell = ({ image, title }) => (
  <CellGroup>
    <CellImage src={image} />
    <CellTitle>{title}</CellTitle>
  </CellGroup>
)

const CellGroup = styled.div`
  min-width: 240px;
  display: grid;
  grid-template-columns: 60px auto;
  -webkit-box-align: center;
  align-items: center;
  gap: 25px;
  padding: 10px 0;
`
const CellImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`
const CellTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`

export default Cell
