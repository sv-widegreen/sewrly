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
      <InputField
        name="projectName"
        onChange={handleChange}
        registerFn={register}
        error={errors.projectName}
        errorMessageMax="Make it short and sweet!"
        errorMessageRequired="Better keep a project name!"
      />

      <InputField
        name="pattern"
        placeholderText="Did you find a pattern?"
        onChange={handleChange}
        registerFn={register}
        error={errors.pattern}
        errorMessageMax="The text is too long..."
      />

      <InputField
        name="size"
        placeholderText="What's the size?"
        onChange={handleChange}
        registerFn={register}
        error={errors.size}
        errorMessageMax="The text is too long..."
      />

      <InputField
        name="nextStep"
        onChange={handleChange}
        registerFn={register}
        error={errors.nextStep}
        errorMessageMax="Don't make it too long"
        errorMessageRequired="Keep track of the next step!"
      />

      <InputTextarea
        name="materialNeeds"
        placeholderText="What materials do you need? Separate materials with a comma."
        onChange={handleChange}
        registerFn={register}
        error={errors.materialNeeds}
        errorMessageMax="Do you really need that much...?"
      />

      <InputTextarea
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
  label {
    display: block;
    padding: 0;
  }

  /* error message div */
  label > div {
    padding: 0 0 5px 15px;
  }

  input {
    font-weight: 200;
    width: 230px;
    height: 100%;
    border-radius: 4px;
    margin: 2px 0 2px 15px;
    color: var(--teal-ultralight);
    font-size: 16px;

    &[name='projectName'] {
      margin: 5px 0 2px 15px;
      padding: 7px 10px 5px 10px;
      font-size: 20px;
      color: var(--teal-light);
    }

    &[name='nextStep'] {
      margin: 2px 0 5px 15px;
      padding: 8px 10px 10px 10px;
      color: var(--teal-medium);
    }
  }

  textarea {
    width: 230px;
    height: 100px;
    border-radius: 4px;
    margin: 0 0 10px 15px;
    padding: 0 10px;
    color: var(--teal-ultralight);
    font-size: 16px;

    :focus {
      outline: none;
      box-shadow: 0 0 0 1pt var(--teal-ultralight);
    }
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
