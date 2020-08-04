import { yupResolver } from '@hookform/resolvers'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import addIcon from '../assets/addIcon.svg'
import Button from './Button'
import InputField from './InputField'
import InputTextarea from './InputTextarea'
import { projectSchema } from './utils/projectSchema.js'

export default function AddNewProjectForm({ addToProjectList }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(projectSchema),
  })

  return (
    <StyledForm onSubmit={handleSubmit(addToProjectList)}>
      <p>Required info:</p>
      <StyledInputGroup>
        <InputField
          labelText="Project Name"
          placeholderText="type here"
          name="projectName"
          registerFn={register}
          error={errors.projectName}
          errorMessageMax="Make it short and sweet!"
          errorMessageRequired="Surely you can think of a name for your project!"
        />

        <InputField
          labelText="What's the next step?"
          placeholderText="e.g. buy materials, cut fabric, sew ..."
          name="nextStep"
          registerFn={register}
          error={errors.nextStep}
          errorMessageMax="Please keep it short!"
          errorMessageRequired="This is the reason why you are using this app!"
        />
      </StyledInputGroup>

      <p className="optional">Optional info (you can add them later): </p>
      <StyledInputGroup>
        <InputField
          labelText="Where did you find the pattern?"
          placeholderText="or did you draft it yourself?"
          name="pattern"
          registerFn={register}
          error={errors.pattern}
          errorMessageMax="The text is too long unfortunately."
        />

        <InputField
          labelText="If there's a size, which one?"
          placeholderText="type here"
          name="size"
          registerFn={register}
          error={errors.size}
          errorMessageMax="Please cut the size of this text!"
        />

        <InputTextarea
          labelText="Materials I have:"
          placeholderText="separate materials with a comma"
          name="materialNeeds"
          registerFn={register}
          error={errors.materialNeeds}
          errorMessageMax="The text is too long ...?"
        />

        <InputTextarea
          labelText="Materials I need:"
          placeholderText="separate materials with a comma"
          name="materialsExisting"
          registerFn={register}
          error={errors.materialsExisting}
          errorMessageMax="Do you really need that much ...?"
        />
      </StyledInputGroup>

      <Button icon={addIcon} size="50px" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 10px;
  height: 446px;
  overflow: scroll;
  margin: 24px auto 50px auto;

  p {
    color: var(--teal-ultralight);
    font-size: 14px;
    margin: 0 0 -8px 10px;
    font-weight: 300;
  }

  .optional {
    margin: 10px 0 -8px 10px;
  }

  button {
    padding-bottom: 14px;
  }
`
const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: white;
  padding: 15px 10px;
  width: 300px;
  align-self: center;
`
