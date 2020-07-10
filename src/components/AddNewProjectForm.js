import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import styled from 'styled-components'
import addButton from '../assets/addButton.svg'
import Button from './Button'
import InputField from './InputField'

export default function AddNewProjectForm({ updateProjectList }) {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(updateProjectList)}>
        <InputField
          labelText="Project Name"
          placeholderText="type here"
          name="projectName"
          errorType="max"
          errorMessage="Make it short and sweet!"
          errorType2="required"
          errorMessage2="Surely you can think of a name for your project!"
        />

        <InputField
          labelText="Where did you find the pattern?"
          placeholderText="or did you draft it yourself?"
          name="pattern"
          errorType="max"
          errorMessage="The text is too long unfortunately."
        />

        <InputField
          labelText="If there's a size, which one?"
          placeholderText="type here"
          name="size"
          errorType="max"
          errorMessage="Please cut the size of this text!"
        />

        <InputField
          labelText="What's the next step?"
          placeholderText="e.g. buy materials, cut fabric, sew..."
          name="nextStep"
          errorType="max"
          errorMessage="Please keep it short!"
          errorType2="required"
          errorMessage2="This is the reason why you are using this app!"
        />
        <Button icon={addButton} />
      </StyledForm>
    </FormProvider>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin: 24px auto;
  font-weight: 200;
`
