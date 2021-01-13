import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
`
const Brand = styled(props => <Link {...props} />)`
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  color: inherit;
  text-decoration: none;
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
  position: fixed;
  right: 10vw; 
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 800px) {
    right: 10vw;
  }
`

export default function Header({ children }) {
  return (
    <Nav>
      <Brand to="/">Amarpreet Singh</Brand>
      <Logo src="/Logo.svg" alt="hyumanamar"></Logo>
    </Nav>
  )
}
