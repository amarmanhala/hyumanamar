import React from "react"
import styled from "styled-components"
import H1 from "./designsystem/H1"
import Lottie from "react-lottie"
import animationData from "./lottie/29178-cat-in-box.json"
import H4 from "./designsystem/H4"
import Card from "./designsystem/Card"
import Grid from "./designsystem/Grid"
import Col from "./designsystem/Col"
import ProjectsData from '../Projects.json'
import { Link } from "gatsby"


const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`

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
        {ProjectsData.map(project => {
          return(

  <Col>
            <Card title={project.title} description={project.description} secondaryColor={project.secondaryColor} primaryColor={project.primaryColor} url={project.url} tools={project.Tools}>
  
            </Card>
          

          </Col>
          )
        })}
 
     
      </Grid>
    </div>
  )
}
