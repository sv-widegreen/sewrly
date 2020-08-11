import React, { useState } from 'react'
import styled from 'styled-components'
import addIcon from '../assets/addIcon.svg'
import navBarIconProjects from '../assets/navBarIconProjects.svg'
import AddNewProjectForm from '../components/AddNewProjectForm/AddNewProjectForm'
import Headline from '../components/Headline/Headline'
import LogoHeader from '../components/LogoHeader/LogoHeader'
import Modal from '../components/Modal/Modal'
import NavigationBar from '../components/Navigation/NavigationBar'

export default function AddNewProjectTab({ onSubmit }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText={'Add a new project'}
          textColor={'var(--teal-medium)'}
        />
        <AddNewProjectForm
          addToProjectList={onSubmit}
          setModalVisible={setModalVisible}
        />
        {modalVisible && (
          <Modal
            header="Wonderful!"
            text="You have created a new project. Check it out or create another one!"
            buttonLeftIcon={navBarIconProjects}
            buttonLeftText="Projects"
            buttonLeftPath="/projects"
            buttonRightIcon={addIcon}
            buttonRightText="Add"
            buttonRightPath="/add-new-project"
            setModalVisible={setModalVisible}
          />
        )}
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: -20px 0 0 0;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);
`
