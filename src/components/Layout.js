import React from "react"
import Container from "./designsystem/Container"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <Container>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  )
}
