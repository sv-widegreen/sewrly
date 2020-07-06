import React from 'react'
import addButton from '../assets/addButton.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'

const projectSchema = yup.object().shape({
  projectName: yup.string().max(25).required(),
  pattern: yup.string().max(25),
  size: yup.string().max(25),
  nextStep: yup.string().max(50).required(),
})

export default function AddNewProjectForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(projectSchema),
  })
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        Project name
        <input
          type="text"
          placeholder="type here"
          name="projectName"
          ref={register}
        />
        <div>
          {errors.projectName &&
            errors.projectName.type === 'max' &&
            'Make it short and sweet!'}
          {errors.projectName &&
            errors.projectName.type === 'required' &&
            'Surely you can think of a name for your project!'}
        </div>
      </label>
      <label>
        Where did you find the pattern?
        <input
          type="text"
          placeholder="or did you draft it yourself?"
          name="pattern"
          ref={register}
        />
        <div>{errors.pattern && 'The text is too long unfortunately.'}</div>
      </label>
      <label>
        If there's a size, which one?
        <input type="text" placeholder="type here" name="size" ref={register} />
        <div>{errors.size && 'Please cut the size of this text!'}</div>
      </label>
      <label>
        What's the next step?
        <input
          type="text"
          placeholder="e.g. buy materials, cut fabric, sew..."
          name="nextStep"
          ref={register}
        />
        <div>
          {errors.nextStep &&
            errors.nextStep.type === 'max' &&
            'Please keep it short!'}
          {errors.nextStep &&
            errors.nextStep.type === 'required' &&
            'This is the reason why you are using this app!'}
        </div>
      </label>

      <label>
        <button type="submit">
          <img src={addButton} alt="" />
        </button>
      </label>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin-top: 24px;
  font-family: var(--font-franklin);
  font-weight: 200;

  label {
    display: block;
    padding: 0 50px 18px 50px;
    color: var(--teal-medium);
    font-size: 18px;
  }

  input {
    display: block;
    width: 275px;
    height: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    padding-left: 10px;

    color: var(--teal-ultralight);
    font-size: 16px;
  }

  div {
    padding-top: 5px;
    font-size: 10px;
  }

  button {
    background: none;
    height: 50px;
    width: 50px;
    position: relative;
    left: 50%;
    margin-left: -25px;
  }
`
