import React from "react"
import styled from "styled-components"
import H3 from "./H3"
import P from "./P"
import { FiExternalLink } from "react-icons/fi"
import Anchor from "./Anchor"


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  min-height: 300px;
  padding: 2em;
  background-color: ${props => props.primaryColor};
  border-radius: 1em;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 400px) {
    min-height: 180px;
  }
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.div`
  width: 70%;
  @media (max-width: 400px) {
   width: 100%;
  }
`
const Icon = styled.div`
  display: none;

  ${Card}:hover & {
    display: block;
    transition: all 0.55s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }
`
const FooterText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.06em;
  color: ${props => props.color || "white"};
`

export default props => {
    console.log(props.secondaryColor)
  return (
    <a style=
    {{color: "inherit", textDecoration: "none"}} href={props.url}>

    <Card primaryColor={props.primaryColor}>
      <CardHeader>
        <Title>
          <H3>{props.title}</H3>
          <P>{props.description}</P>
        </Title>
        <Icon>
          <FiExternalLink size={24}></FiExternalLink>
        </Icon>
      </CardHeader>
      <div>
        <FooterText color={props.secondaryColor}>{props.tools}</FooterText>
      </div>
    </Card>
    </a>
  )
}
