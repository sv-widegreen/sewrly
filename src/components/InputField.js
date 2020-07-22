import React from 'react'
import styled from 'styled-components'

export default function InputField({
  labelText,
  placeholderText,
  name,
  registerFn,
  error,
  errorMessageMax,
  errorMessageRequired,
  onChange,
}) {
  return (
    <StyledLabel>
      {labelText}
      <input
        type="text"
        placeholder={placeholderText}
        name={name}
        ref={registerFn}
        onChange={onChange}
      ></input>
      {error && error.type === 'max' ? (
        <StyledError>{errorMessageMax}</StyledError>
      ) : (
        ''
      )}
      {error && error.type === 'required' ? (
        <StyledError>{errorMessageRequired}</StyledError>
      ) : (
        ''
      )}
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
    padding: 0 10px 0 10px;
    color: var(--teal-ultralight);
    font-size: 16px;

    :focus {
      outline: none;
      box-shadow: 0 0 0 1pt var(--teal-ultralight);
    }

    /* Placeholder color was displayed as black in Chrome */
    ::-webkit-input-placeholder {
      color: var(--teal-ultralight);
    }
  }
`

const StyledError = styled.div`
  padding-top: 5px;
  font-size: 10px;
  color: var(--copper-dark);
`
