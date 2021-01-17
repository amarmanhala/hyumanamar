import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 640px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
  @media (min-width: 1536px) {
    justify-content: space-between;
  }
`

export default ({ children }) => { 
    return <Grid>{children}</Grid>
  }