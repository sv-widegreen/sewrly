import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

export default function InputField({
  labelText,
  placeholderText,
  name,
  errorType,
  errorMessage,
  errorType2,
  errorMessage2,
}) {
  const projectSchema = yup.object().shape({
    projectName: yup.string().max(25).required(),
    pattern: yup.string().max(35),
    size: yup.string().max(25),
    nextStep: yup.string().max(50).required(),
  })
  const { register, errors } = useFormContext({
    resolver: yupResolver(projectSchema),
  })
  return (
    <StyledLabel>
      {labelText}
      <input
        type="text"
        placeholder={placeholderText}
        name={name}
        ref={register}
      ></input>
      <StyledErrors>
        {errors.name && errors.name.type === { errorType } && { errorMessage }}
        {errorType2 && errorMessage2
          ? errors.name &&
            errors.name.type === { errorType2 } && { errorMessage2 }
          : ''}
      </StyledErrors>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  padding: 0 0 18px 50px;
  color: var(--teal-medium);
  font-size: 18px;

  input {
    width: 275px;
    height: 40px;
    border-radius: 4px;
    background: #ffffff;
    padding-left: 10px;
    color: var(--teal-ultralight);
    font-size: 16px;
  }
`

const StyledErrors = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: var(--copper-dark);
`
