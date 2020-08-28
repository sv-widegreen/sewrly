import PropTypes from 'prop-types'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  buttonLeftIcon: PropTypes.string,
  buttonLeftText: PropTypes.string,
  buttonLeftPath: PropTypes.string,
  buttonRightIcon: PropTypes.string,
  buttonRightText: PropTypes.string,
  buttonRightPath: PropTypes.string,
  setModalVisible: PropTypes.func,
}

export default function Modal({
  header,
  text,
  buttonLeftIcon,
  buttonLeftText,
  buttonLeftPath,
  buttonRightIcon,
  buttonRightText,
  buttonRightPath,
  setModalVisible,
}) {
  const { url } = useRouteMatch()

  return (
    <StyledModalContainer>
      <StyledModal>
        <h4>{header}</h4>
        <p>{text}</p>
        <StyledNavigation>
          <Link to={`${buttonLeftPath}` || `${url}`} onClick={onClick}>
            <img src={buttonLeftIcon} alt="" />
            <p>{buttonLeftText}</p>
          </Link>
          <Link to={`${buttonRightPath}` || `${url}`} onClick={onClick}>
            <img src={buttonRightIcon} alt="" />
            <p>{buttonRightText}</p>
          </Link>
        </StyledNavigation>
      </StyledModal>
    </StyledModalContainer>
  )

  function onClick() {
    setModalVisible(false)
  }
}

const StyledModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 251, 246, 0.7);
`

const StyledModal = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 80vw;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: var(--copper-ultralight);
  background: var(--copper-gradient);
  text-align: center;
  border-radius: 10px;

  h4 {
    font-size: 20px;
  }

  > p {
    font-size: 16px;
    padding-bottom: 20px;
  }
`

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  a {
    font-size: 10px;
    color: var(--copper-ultralight);
    text-decoration: none;
    width: 64px;
  }

  img {
    width: 40px;

    :active {
      transform: scale(0.75, 0.75);
    }
  }
`
