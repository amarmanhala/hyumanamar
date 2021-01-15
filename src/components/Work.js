import React from "react"
import styled from "styled-components"
import H1 from "./designsystem/H1"
import Lottie from "react-lottie"
import animationData from "./lottie/29178-cat-in-box.json"
import H4 from "./designsystem/H4"

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 640px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
  @media (min-width: 1536px) {
    justify-content: space-between;
  }
`
const Col = styled.div`
  width: 100%;
  background-color: #121217;
  height: 400px;
  border-radius: 8px;
  @media (min-width: 640px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 49%;
  }
  @media (min-width: 1536px) {
    width: 30%;
  }
`
const CardInnerWrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
padding: 20px;
`;

export default function Work() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div>
      <SectionHeader>
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          style={{ margin: "0px 0px", marginRight: "8px" }}
        />
        <H4>Recent Work</H4>
      </SectionHeader>
      <Grid>
        <Col>
        <CardInnerWrapper>
<p>Gitmeet</p>
<p>Javascript, React, Github Api</p>
        </CardInnerWrapper>
        </Col>
        <Col>2</Col>
      </Grid>
    </div>
  )
}
