import React from 'react'
import styled from 'styled-components'
import InputField from './InputField'

export default {
  title: 'Input Field',
  component: InputField,
}

export const allInputFields = () => (
  <>
    <InputField
      labelText="Project Name"
      placeholderText="type here"
      name="projectName"
    />

    <InputField
      labelText="Where did you find the pattern?"
      placeholderText="or did you draft it yourself?"
      name="pattern"
    />

    <InputField
      labelText="If there's a size, which one?"
      placeholderText="type here"
      name="size"
    />

    <InputField
      labelText="What's the next step?"
      placeholderText="e.g. buy materials, cut fabric, sew..."
      name="nextStep"
    />
  </>
)

export const InputFieldWith1Error = () => (
  <>
    <InputField
      labelText="Project Name"
      placeholderText="type here"
      name="projectName"
    />
    <StyledError>Make it short and sweet!</StyledError>
  </>
)

export const InputFieldWith2Errors = () => (
  <>
    <InputField
      labelText="Project Name"
      placeholderText="type here"
      name="projectName"
    />
    <StyledError>Make it short and sweet!</StyledError>
    <StyledError>Surely you can think of a name for your project!</StyledError>
  </>
)

const StyledError = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: var(--copper-dark);
`
