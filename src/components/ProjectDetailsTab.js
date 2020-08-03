import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar'

export default function ProjectDetailsTab({ projectList }) {
  const { id } = useParams()
  const {
    projectName,
    pattern,
    size,
    nextStep,
    materialNeeds,
    materialsExisting,
  } = projectList.find((project) => id === project.id)
  console.log(projectName)
  // const {
  //   projectName,
  //   pattern,
  //   size,
  //   nextStep,
  //   materialNeeds,
  //   materialsExisting,
  // } = projectData

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline headlineText={projectName} textColor={'var(--teal-medium)'} />
        <p>{pattern}</p>
        <p>{size}</p>
        <p>{nextStep}</p>
        <p>{materialNeeds}</p>
        <p>{materialsExisting}</p>
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-top: -20px;
  padding: 0 30px 50px 30px;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  p {
    color: var(--teal-medium);
    font-size: 16px;
    padding: 20px 0;
  }
`
