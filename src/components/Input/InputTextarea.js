import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

InputTextarea.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  registerFn: PropTypes.func,
  error: PropTypes.object,
  errorMessageMax: PropTypes.string,
  onChange: PropTypes.func,
}

export default function InputTextarea({
  labelText,
  placeholderText,
  name,
  registerFn,
  error,
  errorMessageMax,
  onChange,
}) {
  return (
    <StyledLabel>
      {labelText}
      <textarea
        placeholder={placeholderText}
        name={name}
        ref={registerFn}
        onChange={onChange}
      />
      {error && error.type === 'max' ? (
        <StyledError>{errorMessageMax}</StyledError>
      ) : (
        ''
      )}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  color: var(--teal-medium);
  font-size: 18px;
  font-weight: 200;
  margin-top: 10px;

  textarea {
    width: 275px;
    height: 100px;
    border-radius: 4px;
    padding: 10px 10px;
    color: var(--teal-ultralight);
    font-size: 16px;
    font-family: var(--font-franklin);
    background: var(--copper-ultralight);

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
  padding: 0 0 10px 0;
  font-size: 10px;
  color: var(--copper-dark);
`
