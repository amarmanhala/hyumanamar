import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Work from "../components/Work"

export default function Home() {
  return (
    <Layout>
      <Bio></Bio>
      <Work></Work>
    </Layout>
  );
}