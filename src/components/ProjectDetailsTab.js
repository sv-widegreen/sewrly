import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import editIcon from '../assets/editIcon.svg'
import arrowLeft from '../assets/arrowLeft.svg'
import Button from './Button'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar'
import ProjectUpdateForm from './ProjectUpdateForm'

export default function ProjectDetailsTab({ projectList, updateProjectData }) {
  const [isEditing, setEditing] = useState(false)
  const { id } = useParams()
  const history = useHistory()
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
        <Button
          className="back-button"
          size="11px"
          icon={arrowLeft}
          onClick={() => history.push('/projects')}
        />
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
            <>
              <Button
                className="edit-button"
                text="Edit"
                size="30px"
                icon={editIcon}
                onClick={() => setEditing(true)}
              />
              <p className="title">Next step:</p>
              <p className="entry">{nextStep}</p>

              {pattern && (
                <>
                  <p className="title">Pattern:</p>
                  <p className="entry">{pattern}</p>
                </>
              )}
              {size && (
                <>
                  <p className="title">Size:</p>
                  <p className="entry">{size}</p>
                </>
              )}
              {materialNeeds && (
                <>
                  <p className="title">Materials I need:</p>
                  <p className="entry">{materialNeeds}</p>
                </>
              )}
              {materialsExisting && (
                <>
                  <p className="title">Materials I have:</p>
                  <p className="entry">{materialsExisting}</p>
                </>
              )}
            </>
          )}
        </StyledProject>
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: -20px;
  padding: 0 30px 50px 30px;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  > button {
    position: absolute;
    top: 22px;
    left: 20px;
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
    top: -6px;
    right: -16px;
  }

  p {
    font-weight: 200;
    font-size: 16px;
  }
  .title {
    margin: 20px 0 6px 6px;
    color: var(--teal-dark);
    font-size: 18px;
  }
  .entry {
    margin: 0 24px 0 24px;
    color: var(--teal-light);
    font-size: 16px;
  }
`
