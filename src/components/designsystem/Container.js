import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  @media (min-width: 800px) {
    width: 80vw;
  }
`

export default ({ children }) => {
  return <Container>{children}</Container>
}
