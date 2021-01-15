import React from "react"
import styled from "styled-components"
import H1 from "./designsystem/H1";

const BioWrapper = styled.div`
  width: 100%;
  @media (min-width: 640px) {
    width: 70%;
  }
`;
export default function Bio() {
  return (
    <BioWrapper>
      <H1>
        Hi there, Amar is a Front-end web developer and UI designer in Toronto.
        He spends his time writing code and designing user interfaces to
        crafting products for humans.
      </H1>
    </BioWrapper>
  )
}
