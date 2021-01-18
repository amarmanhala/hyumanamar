import React from "react"
import Container from "./designsystem/Container"
import Footer from "./Footer"
import Header from "./Header"
import SEO from './SEO'

export default function Layout({ children }) {
  return (
    <>
      <SEO></SEO>
      <Container>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Container>
    </>
  )
}
