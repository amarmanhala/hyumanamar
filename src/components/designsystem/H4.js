import React from "react"
import styled from "styled-components"

const H4 = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;    
  @media (min-width: 640px) {
    line-height: 60px;
    letter-spacing: 1px;  

  }
`;

export default ({ children }) => { 
    return <H4>{children}</H4>
  }