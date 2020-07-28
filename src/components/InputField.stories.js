import React from 'react'
import styled from 'styled-components'
import InputField from './InputField'

export default {
  title: 'Input Field',
  component: InputField,
}

export const allInputFields = () => (
  <StyledForm>
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
  </StyledForm>
)

export const InputFieldWith1Error = () => (
  <StyledForm>
    <InputField
      labelText="Project Name"
      placeholderText="type here"
      name="projectName"
    />
    <StyledError>Make it short and sweet!</StyledError>
  </StyledForm>
)

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin: 24px auto;
  font-weight: 200;
`

const StyledError = styled.div`
  margin-top: -13px;
  padding-left: 50px;
  font-size: 10px;
  color: var(--copper-dark);
`
