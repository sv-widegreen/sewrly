import { yupResolver } from '@hookform/resolvers'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import InputField from './InputField'
import { projectSchema } from './utils/projectSchema.js'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import Button from './Button'

export default function ProjectUpdateForm({
  projectData,
  updateProjectData,
  setEditing,
}) {
  const { id, projectName, pattern, size, nextStep } = projectData
  const { register, errors, trigger } = useForm({
    resolver: yupResolver(projectSchema),
    mode: 'onChange',
    defaultValues: {
      projectName,
      pattern,
      size,
      nextStep,
    },
  })

  return (
    <StyledForm>
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

      <Button
        type="button"
        icon={saveButtonDiskTeal}
        onClick={async () => {
          const changeValid = await trigger()
          if (changeValid) {
            setEditing(false)
          }
        }}
      />
    </StyledForm>
  )

  function handleChange(event) {
    updateProjectData(event, id)
  }
}

const StyledForm = styled.form`
  label {
    display: block;
    padding: 0;
  }

  /* error message div */
  label > div {
    padding-left: 15px;
  }

  input {
    font-weight: 200;
    width: 230px;
    height: 100%;
    border-radius: 4px;
    margin: 2px 0 2px 15px;
    font-family: var(--font-franklin);
    color: var(--teal-ultralight);
    font-size: 16px;

    &[name='projectName'] {
      margin: 5px 0 2px 15px;
      padding: 7px 10px 5px 10px;
      font-size: 20px;
    }

    &[name='nextStep'] {
      margin: 2px 0 5px 15px;
      padding: 8px 10px 10px 10px;
    }
  }

  button,
  button > img {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`
