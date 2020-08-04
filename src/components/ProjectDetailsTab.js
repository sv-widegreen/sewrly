import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import editIcon from '../assets/editIcon.svg'
import Button from './Button'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar'
import ProjectUpdateForm from './ProjectUpdateForm'

export default function ProjectDetailsTab({ projectList, updateProjectData }) {
  const [isEditing, setEditing] = useState(false)
  const { id } = useParams()
  const projectData = projectList.find((project) => id === project.id)
  const {
    projectName,
    pattern,
    size,
    nextStep,
    materialNeeds,
    materialsExisting,
  } = projectData

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline headlineText={projectName} textColor={'var(--teal-medium)'} />
        <StyledProject>
          {isEditing ? (
            <>
              <ProjectUpdateForm
                projectData={projectData}
                updateProjectData={updateProjectData}
                setEditing={setEditing}
              />
            </>
          ) : (
            <div>
              <Button
                text="Edit"
                size="30px"
                icon={editIcon}
                onClick={() => setEditing(true)}
              />
              <p name="title">Next step:</p>
              <p name="nextStep">{nextStep}</p>

              {pattern && (
                <>
                  <p name="title">Pattern:</p>
                  <p name="pattern">{pattern}</p>
                </>
              )}
              {size && (
                <>
                  <p name="title">Size:</p>
                  <p name="size">{size}</p>
                </>
              )}
              {materialNeeds && (
                <>
                  <p name="title">Materials I need:</p>
                  <p name="materials">{materialNeeds}</p>
                </>
              )}
              {materialsExisting && (
                <>
                  <p name="title">Materials I have:</p>
                  <p name="materials">{materialsExisting}</p>
                </>
              )}
            </div>
          )}
        </StyledProject>
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: -20px;
  padding: 0 30px 50px 30px;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  p {
    color: var(--teal-medium);
    font-size: 16px;
  }
`
const StyledProject = styled.div`
  position: relative;
  width: 300px;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 20px 0;

  button {
    position: absolute;
    top: -16px;
    right: -16px;
  }

  p {
    font-weight: 200;
    color: var(--teal-light);
    font-size: 16px;

    &[name='projectName'] {
      padding: 12px 24px 10px 24px;
      color: var(--teal-dark);
      font-size: 20px;
    }

    &[name='title'] {
      margin-top: 10px;
      color: var(--teal-medium);
    }

    &[name='nextStep'] {
      color: var(--teal-light);
    }

    &[name='materials'] {
      padding: 0 24px 14px 24px;
    }
  }
`
