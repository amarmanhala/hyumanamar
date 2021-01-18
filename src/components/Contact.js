import React from "react"
import styled from "styled-components"
import H1 from "./designsystem/H1"
import H3 from "./designsystem/H3"
import H4 from "./designsystem/H4"
import P from "./designsystem/P"

const ContactWrapper = styled.div`
margin: 6em 0;
`;
const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`

export default props => {
    
  return (
    <ContactWrapper>
      <SectionHeader>
        <H3>Clients Friends Collaboration. Let's chat.</H3>
      </SectionHeader>
      <div>
      <P>
          Email me at{" "}
          <a href="mailto: amar.manhala@gmail.com" style={{ textDecoration: "none"}}>
            <u>amar.manhala@gmail.com</u>
          </a>{" "}
          or you can find on{" "}
          <a
            href="https://twitter.com/hyumanamar"
            target="_blank"
            className="underline"
          >
            <u>Twitter</u>
          </a>
          ,{" "}
          <a
            href="https://github.com/amarmanhala"
            target="_blank"
            className="underline"
          >
            <u>Github</u>
          </a>
          .
        </P>    
      </div>
    </ContactWrapper>
  )
}
