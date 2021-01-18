import React from "react"
import About from "../components/About"
import Bio from "../components/Bio"
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Work from "../components/Work"

export default function Home() {
  return (
    <Layout>
      <Bio></Bio>
      <Work></Work>
      <About></About>
      <Contact></Contact>
    </Layout>
  );
}