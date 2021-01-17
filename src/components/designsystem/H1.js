import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 40px;  font-weight: 400;
  margin: 5rem 0;
  @media (min-width: 640px) {
    line-height: 60px;
    letter-spacing: 1px;  

  }
`;

export default ({ children }) => { 
    return <H1>{children}</H1>
  }