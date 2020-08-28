import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Headline from '../../components/Headline/Headline'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import NavigationBar from '../../components/Navigation/NavigationBar'
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem'

ArchiveList.propTypes = {
  projectList: PropTypes.array,
}

export default function ArchiveList({ projectList }) {
  const finishedProjectsList = projectList.filter((project) => project.status)
  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText="Archive"
          textColor={'var(--copper-ultralight)'}
        />
        <div>
          {finishedProjectsList.length <= 0 && (
            <p className="noProjectsYet">
              Finish a project and mark it as done!
            </p>
          )}
          <StyledProjectList>
            {finishedProjectsList.map((projectData) => (
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
    height: 480px;
    overflow: scroll;
    margin-top: 10px;
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
