import React from "react"
import styled from "styled-components"

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default ({ children }) => { 
    return <Anchor>{children}</Anchor>
  }