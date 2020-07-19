import { yupResolver } from '@hookform/resolvers'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import addButton from '../assets/addButton.svg'
import Button from './Button'
import InputField from './InputField'
import { projectSchema } from './utils/projectSchema.js'

export default function AddNewProjectForm({ updateProjectList }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(projectSchema),
  })

  return (
    <StyledForm onSubmit={handleSubmit(updateProjectList)}>
      <InputField
        labelText="Project Name*"
        placeholderText="type here"
        name="projectName"
        registerFn={register}
        error={errors.projectName}
        errorMessageMax="Make it short and sweet!"
        errorMessageRequired="Surely you can think of a name for your project!"
      />

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

      <InputField
        labelText="What's the next step?*"
        placeholderText="e.g. buy materials, cut fabric, sew..."
        name="nextStep"
        registerFn={register}
        error={errors.nextStep}
        errorMessageMax="Please keep it short!"
        errorMessageRequired="This is the reason why you are using this app!"
      />
      <Button icon={addButton} />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin: 24px auto 40px auto;
  font-weight: 200;
`
