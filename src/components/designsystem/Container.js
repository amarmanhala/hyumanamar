import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 640px) {
    width: 600px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
  @media (min-width: 1280px) {
    width: 980px;
  }
  @media (min-width: 1536px) {
    width: 1024px;
  }
  
`

export default ({ children }) => {
  return <Container>{children}</Container>
}
