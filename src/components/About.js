import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MeImage from "../images/me.png"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import H3 from "./designsystem/H3"
import P from "./designsystem/P"
import Emoji from "./designsystem/Emoji"

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 500px;
  margin: 4em 0;
  width: 100%;
  @media (max-width: 600px) {
flex-direction: column;
}
`
const Picture = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  @media (max-width: 600px) {
    margin: 1rem 0;
width: 100%;
}
`
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  @media (max-width: 600px) {
    margin: 4rem 0;
width: 100%;
}
`

export default function About({ children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <AboutWrapper>
        <Picture>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="A corgi smiling happily"
          />
        </Picture>
        <AboutMe>
          <H3>About me</H3>
          <P>
            I born and raised in India. After studies (Masters of computer
            applications), i moved to Canada for higher studies. <br />
            Involved in the lifecycle of a product - from visual design, design
            systems to build maintainable, fast and accessible interfaces.{" "}
            <br /> Outside of work, I like to read{" "}
            <Emoji symbol="📚" label="Books   "></Emoji>books and I'm a{" "}
            <Emoji symbol="☕" label="Tea"></Emoji>milk tea enthusiast.
            <br />
            You can take a look at my resume, if you are interested in the
            details.
          </P>
          <P>
            <a style={{textDecoration: "none", color: "inherit"}} href="https://www.buymeacoffee.com/hyumanamar">Buy me a Tea</a>
          </P>
        </AboutMe>
      </AboutWrapper>
    </>
  )
}
