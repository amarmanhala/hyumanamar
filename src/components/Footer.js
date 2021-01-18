import React from "react"
import styled from "styled-components"
import Lottie from 'react-lottie'
import animationData from './lottie/33510-smiling.json'
import P from "./designsystem/P";

const FooterWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-top: 1px solid #1f1f1f;  
padding: 1.5em 0;
@media (max-width: 600px) {
flex-direction: column;
}

`;
const FooterNote = styled.div`
width: 50%;
@media (max-width: 600px) {
width: 100%;
}
`;
const FooterText = styled.span`
font-size: .90em;
color: #a1a1a6;
`;
const Greeting = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 600px) {
margin: 2rem 0;
align-items: flex-end;
justify-content: flex-start;
}
`;
export default function Footer({ children }) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
  return (
    <FooterWrapper>
      <FooterNote><FooterText>This site, I have built with <u>Gatsby</u>, <u>Styled Components</u>, and is hosted on <u>Netlify</u>. <u>Github</u> hosts the source code.</FooterText></FooterNote>
      <Greeting>
          <Lottie
            options={defaultOptions}
            height={30}
            width={30}
            style={{ margin: "0px 8px" }}
          />
          <P style={{ marginLeft: "2rem" }}><b>Happy {dayName}</b></P>
        </Greeting>
    </FooterWrapper>
  )
}