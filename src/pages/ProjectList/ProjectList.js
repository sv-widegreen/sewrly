import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import addIcon from '../../assets/addIcon.svg'
import Headline from '../../components/Headline/Headline'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import NavigationBar from '../../components/Navigation/NavigationBar'
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem'

export default function ProjectList({ projectList }) {
  const inProgressProjectsList = projectList.filter(
    (project) => !project.status
  )
  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText="Projects"
          textColor={'var(--copper-ultralight)'}
        />
        <div>
          <Link to="/add-new-project" className="addNewLink">
            <img src={addIcon} alt="add new project" />
            <p>Add</p>
          </Link>
          {inProgressProjectsList.length <= 0 && (
            <p className="noProjectsYet">
              Click the top right button to add a new project!
            </p>
          )}
          <StyledProjectList>
            {inProgressProjectsList.map((projectData) => (
              <ProjectListItem key={projectData.id} projectData={projectData} />
            ))}
          </StyledProjectList>
        </div>
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  background: var(--copper-gradient);
  min-height: 556px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  .noProjectsYet {
    color: var(--copper-ultralight);
    width: 200px;
    text-align: center;
    padding-top: 200px;
  }

  > div {
    position: relative;
    height: 450px;
    overflow: scroll;
    margin-top: 20px;
  }

  .addNewLink {
    position: fixed;
    margin: 0;
    top: 104px;
    right: 20px;
    text-decoration: none;
    text-align: center;
    font-size: 10px;
    color: var(--teal-dark);

    img {
      width: 30px;

      :active {
        transform: scale(0.9, 0.9);
      }
    }
  }
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  a:first-child {
    margin-bottom: 35px;
  }
`
