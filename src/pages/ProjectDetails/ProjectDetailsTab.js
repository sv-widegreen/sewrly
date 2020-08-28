import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import arrowLeft from '../../assets/arrowLeft.svg'
import editIcon from '../../assets/editIcon.svg'
import Button from '../../components/Button/Button'
import Headline from '../../components/Headline/Headline'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import NavigationBar from '../../components/Navigation/NavigationBar'
import ProjectUpdateForm from '../../components/ProjectUpdateForm/ProjectUpdateForm'

ProjectDetailsTab.propTypes = {
  projectList: PropTypes.array,
  updateProjectData: PropTypes.func,
}

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
    notes,
    image,
    materialNeeds,
    materialsExisting,
    status,
  } = projectData

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline headlineText={projectName} textColor={'var(--teal-medium)'} />
        <StyledProject>
          {isEditing ? (
            <ProjectUpdateForm
              projectData={projectData}
              updateProjectData={updateProjectData}
              setEditing={setEditing}
            />
          ) : (
            <StyledDetailsContainer>
              <Button
                size="11px"
                icon={arrowLeft}
                onClick={() => history.goBack()}
                disabled={isEditing}
              />
              <Button
                text="Edit"
                size="30px"
                icon={editIcon}
                onClick={() => setEditing(true)}
              />
              {status ? (
                <>
                  <p className="status">finished</p>
                  {image ? (
                    <img className="uploadedImage" src={image} alt="" />
                  ) : (
                    <p className="title">Picture:</p>
                  )}
                  <p className="title">Notes:</p>
                  <p className="entry">{notes}</p>
                  <p className="title">Pattern:</p>
                  {pattern && <p className="entry">{pattern}</p>}

                  <p className="title">Size:</p>
                  {size && <p className="entry">{size}</p>}
                </>
              ) : (
                <>
                  <p className="status">in progress</p>
                  {image ? (
                    <img className="uploadedImage" src={image} alt="" />
                  ) : (
                    <p className="title">Picture:</p>
                  )}
                  <p className="title">Next step:</p>
                  <p className="entry">{nextStep}</p>

                  <p className="title">Notes:</p>
                  <p className="entry">{notes}</p>

                  <p className="title">Pattern:</p>
                  {pattern && <p className="entry">{pattern}</p>}

                  <p className="title">Size:</p>
                  {size && <p className="entry">{size}</p>}

                  <p className="title">Materials I need:</p>
                  {materialNeeds && <p className="entry">{materialNeeds}</p>}

                  <p className="title">Materials I have:</p>
                  {materialsExisting && (
                    <p className="entry">{materialsExisting}</p>
                  )}
                </>
              )}
            </StyledDetailsContainer>
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
`
const StyledProject = styled.div`
  position: relative;
  width: 300px;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 10px 0 20px 0;

  button {
    position: fixed;
    margin: 0;
    top: 104px;
    right: 20px;
  }

  button:first-child {
    position: fixed;
    margin: 0;
    top: 110px;
    left: 20px;
  }

  .uploadedImage {
    width: auto;
    max-width: 300px;
    height: 100px;
    margin: 0 auto;
    border-radius: 10px;
    border-style: none;
    object-fit: cover;
  }

  p {
    font-weight: 200;
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

  .status {
    margin: 0 auto 8px;
    font-size: 14px;
    color: var(--teal-light);
  }
`

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 458px;
  overflow: scroll;
  padding-bottom: 30px;
`
