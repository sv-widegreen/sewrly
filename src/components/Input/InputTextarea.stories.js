import React from 'react'
import InputTextarea from './InputTextarea'
import styled from 'styled-components'

export default {
  title: 'Input Textarea',
  component: InputTextarea,
}

export const inputTextarea = () => (
  <StyledForm>
    <InputTextarea
      labelText="Materials"
      placeholderText="What do you need? Be precise!"
      name="materials"
    />
  </StyledForm>
)
export const inputTextareaWith1Error = () => (
  <StyledForm>
    <InputTextarea
      labelText="Materials"
      placeholderText="What do you need? Be precise!"
      name="materials"
    />
    <StyledError>Do you really need that much...?</StyledError>
  </StyledForm>
)

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin: 24px auto;
  font-weight: 200;
`
const StyledError = styled.div`
  margin-top: 5px;
  padding-left: 50px;
  font-size: 10px;
  color: var(--copper-dark);
`
