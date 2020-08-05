import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import arrowRight from '../assets/arrowRight.svg'

export default function ProjectListItem({ projectData }) {
  const { url } = useRouteMatch()
  const { id, projectName, nextStep, image } = projectData
  return (
    <StyledLink to={`${url}/${projectName}/${id}`}>
      <StyledProject>
        {image ? (
          <img src={image} alt="" />
        ) : (
          <p className="noImage">no image uploaded yet</p>
        )}
        <section>
          <p name="projectName">{projectName}</p>
          <p name="nextStepTitle">Next step:</p>
          <p name="nextStep">{nextStep}</p>
        </section>
        <img className="arrow" src={arrowRight} alt="" />
      </StyledProject>
    </StyledLink>
  )
}

const StyledProject = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  width: 300px;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 20px 20px 0 20px;
  padding: 16px 10px;

  img {
    width: 80px;
    height: 80px;
    margin: 0 10px 0 0;
    border-radius: 10px;
    border-style: none;
    object-fit: cover;
  }

  .noImage {
    color: var(--teal-ultralight);
    text-align: center;
    font-size: 10px;
    padding: auto;
    width: 80px;
  }

  section {
    width: 170px;

    p {
      font-weight: 200;
      font-size: 16px;

      &[name='projectName'] {
        color: var(--teal-dark);
        font-size: 18px;
      }

      &[name='nextStepTitle'] {
        margin-top: 10px;
        color: var(--teal-medium);
      }

      &[name='nextStep'] {
        color: var(--teal-light);
      }
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    margin: -12px 0 0 0;
    width: 11px;
    height: auto;
    opacity: 0.7;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
