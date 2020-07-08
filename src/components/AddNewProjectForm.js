import { yupResolver } from '@hookform/resolvers'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import addButton from '../assets/addButton.svg'
import Button from './Button'
import ProjectTab from './ProjectTab'

const projectSchema = yup.object().shape({
  name: yup.string().max(25).required(),
  pattern: yup.string().max(35),
  size: yup.string().max(25),
  nextStep: yup.string().max(50).required(),
})

export default function AddNewProjectForm() {
  const [projectList, setProjectList] = useState([])

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(projectSchema),
  })

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Project name
          <input
            type="text"
            placeholder="type here"
            name="name"
            ref={register}
          />
          <StyledErrors>
            {errors.name &&
              errors.name.type === 'max' &&
              'Make it short and sweet!'}
            {errors.name &&
              errors.name.type === 'required' &&
              'Surely you can think of a name for your project!'}
          </StyledErrors>
        </label>
        <label>
          Where did you find the pattern?
          <input
            type="text"
            placeholder="or did you draft it yourself?"
            name="pattern"
            ref={register}
          />
          <StyledErrors>
            {errors.pattern && 'The text is too long unfortunately.'}
          </StyledErrors>
        </label>
        <label>
          If there's a size, which one?
          <input
            type="text"
            placeholder="type here"
            name="size"
            ref={register}
          />
          <StyledErrors>
            {errors.size && 'Please cut the size of this text!'}
          </StyledErrors>
        </label>
        <label>
          What's the next step?
          <input
            type="text"
            placeholder="e.g. buy materials, cut fabric, sew..."
            name="nextStep"
            ref={register}
          />
          <StyledErrors>
            {errors.nextStep &&
              errors.nextStep.type === 'max' &&
              'Please keep it short!'}
            {errors.nextStep &&
              errors.nextStep.type === 'required' &&
              'This is the reason why you are using this app!'}
          </StyledErrors>
        </label>
        <Button type={'submit'} icon={addButton} />
      </StyledForm>

      {projectList.length > 0 ? <ProjectTab projectList={projectList} /> : ''}
    </>
  )

  function onSubmit(projectData, event) {
    event.target.reset()
    console.log(projectData)
    setProjectList([...projectList, projectData])
  }
}

const StyledForm = styled.form`
  margin-top: 24px;
  font-weight: 200;

  label {
    display: block;
    padding: 0 50px 18px 50px;
    color: var(--teal-medium);
    font-size: 18px;
  }

  input {
    display: block;
    width: 275px;
    height: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    padding-left: 10px;

    color: var(--teal-ultralight);
    font-size: 16px;
  }

  button {
    background: none;
    height: 50px;
    width: 50px;
    position: relative;
    left: 50%;
    margin-left: -25px;
  }
`

const StyledErrors = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: var(--copper-dark);
`
