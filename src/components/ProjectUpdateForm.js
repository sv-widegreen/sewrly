import { yupResolver } from '@hookform/resolvers'
import isEqual from 'lodash.isequal'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import saveIcon from '../assets/saveIcon.svg'
import Button from './Button'
import InputField from './InputField'
import InputTextarea from './InputTextarea'
import { projectSchema } from './utils/projectSchema.js'

export default function ProjectUpdateForm({
  projectData,
  updateProjectData,
  setEditing,
}) {
  const [updatedData, setUpdatedData] = useState({ ...projectData })
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(projectSchema),
    defaultValues: { ...projectData },
  })

  return (
    <StyledForm onSubmit={handleSubmit(handleNewData)}>
      <InputTextarea
        labelText="Next step:"
        name="nextStep"
        onChange={handleChange}
        registerFn={register}
        error={errors.nextStep}
        errorMessageMax="Don't make it too long"
        errorMessageRequired="Keep track of the next step!"
      />

      <InputField
        labelText="Project Name:"
        name="projectName"
        onChange={handleChange}
        registerFn={register}
        error={errors.projectName}
        errorMessageMax="Make it short and sweet!"
        errorMessageRequired="Better keep a project name!"
      />

      <InputField
        labelText="Pattern:"
        name="pattern"
        placeholderText="Did you find a pattern?"
        onChange={handleChange}
        registerFn={register}
        error={errors.pattern}
        errorMessageMax="The text is too long..."
      />

      <InputField
        labelText="Size:"
        name="size"
        placeholderText="What's the size?"
        onChange={handleChange}
        registerFn={register}
        error={errors.size}
        errorMessageMax="The text is too long..."
      />

      <InputTextarea
        labelText="Materials I need:"
        name="materialNeeds"
        placeholderText="What materials do you need? Separate materials with a comma."
        onChange={handleChange}
        registerFn={register}
        error={errors.materialNeeds}
        errorMessageMax="Do you really need that much...?"
      />

      <InputTextarea
        labelText="Materials I have:"
        name="materialsExisting"
        placeholderText="What materials do you already have? Separate materials with a comma."
        onChange={handleChange}
        registerFn={register}
        error={errors.materialsExisting}
        errorMessageMax="The text is too long...?"
      />

      <Button text="Save" size="30px" icon={saveIcon} />
    </StyledForm>
  )

  function handleChange(event) {
    setUpdatedData({ ...updatedData, [event.target.name]: event.target.value })
  }

  function handleNewData() {
    if (isEqual(updatedData, projectData)) {
      setEditing(false)
    } else {
      updateProjectData(updatedData)
      setEditing(false)
    }
  }
}

const StyledForm = styled.form`
  height: 438px;
  overflow: scroll;

  label {
    display: block;
    padding: 0;
    margin: 20px 0 0 6px;
  }

  input,
  textarea {
    font-weight: 200;
    color: var(--teal-light);
    background-color: white;
  }
`
