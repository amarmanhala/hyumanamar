import React from "react"
import styled from "styled-components"

const P = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0;    
line-height: 1.4em;
  letter-spacing: .02em;
  margin-bottom: .45em;
  @media (min-width: 640px) {

  }
`;

export default ({ children }) => { 
    return <P>{children}</P>
  }