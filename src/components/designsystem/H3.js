import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;    
  height: auto; 
  letter-spacing: .06em;
  margin-bottom: .45em;
  @media (min-width: 640px) {

  }
`;

export default ({ children }) => { 
    return <H3>{children}</H3>
  }