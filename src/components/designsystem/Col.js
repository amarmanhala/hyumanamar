import React from "react"
import styled from "styled-components"

const Col = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.2em;
  @media (min-width: 640px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 49%;
  }
  @media (min-width: 1536px) {
    width: 30%;
  }
`;


export default ({ children }) => { 
    return <Col>{children}</Col>
  }