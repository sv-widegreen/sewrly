import { yupResolver } from '@hookform/resolvers'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import saveIcon from '../assets/saveIcon.svg'
import Button from './Button'
import InputField from './InputField'
import InputTextarea from './InputTextarea'
import { projectSchema } from './utils/projectSchema.js'

export default function AddNewProjectForm({ addToProjectList }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(projectSchema),
  })

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')

  return (
    <StyledForm onSubmit={handleSubmit(handleInputs)}>
      <p>Required info:</p>
      <StyledInputGroup>
        <InputField
          labelText="Project name:"
          placeholderText="type here"
          name="projectName"
          registerFn={register}
          error={errors.projectName}
          errorMessageMax="Make it short and sweet!"
          errorMessageRequired="Surely you can think of a name for your project!"
        />

        <InputField
          // labelText="What's the next step?"
          labelText="Next step:"
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
        <StyledImageUpload>
          <p>Upload an image:</p>
          <InputField
            labelText="Choose a file"
            placeholder="upload an image"
            type="file"
            name="image"
            registerFn={register}
            onChange={uploadImage}
          />
        </StyledImageUpload>

        {loading && <p className="loading">loading ...</p>}
        {image && <StyledThumbnail src={image} />}

        <InputField
          // labelText="Where did you find the pattern?"
          // placeholderText="or did you draft it yourself?"
          labelText="Pattern:"
          placeholderText="type here"
          name="pattern"
          registerFn={register}
          error={errors.pattern}
          errorMessageMax="The text is too long unfortunately."
        />

        <InputField
          // labelText="If there's a size, which one?"
          labelText="Size:"
          placeholderText="type here"
          name="size"
          registerFn={register}
          error={errors.size}
          errorMessageMax="Please cut the size of this text!"
        />

        <InputTextarea
          labelText="Materials I need:"
          placeholderText="separate materials with a comma"
          name="materialNeeds"
          registerFn={register}
          error={errors.materialNeeds}
          errorMessageMax="The text is too long ...?"
        />

        <InputTextarea
          labelText="Materials I have:"
          placeholderText="separate materials with a comma"
          name="materialsExisting"
          registerFn={register}
          error={errors.materialsExisting}
          errorMessageMax="Do you really need that much ...?"
        />
      </StyledInputGroup>

      <Button text="Save" size="30px" icon={saveIcon} />
    </StyledForm>
  )

  async function uploadImage(event) {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'sewrly_upload')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dun33qbbm/image/upload',
      { method: 'POST', body: data }
    )
    const image = await res.json()
    setImage(image.secure_url)
    setLoading(false)
  }

  function handleInputs(projectData, event) {
    event.preventDefault()
    projectData.id = uuidv4()
    projectData.status = ''
    projectData.image = image
    addToProjectList(projectData)
    event.target.reset()
    setImage('')
    event.target[0].focus()
  }
}

const StyledForm = styled.form`
  height: 454px;
  overflow: scroll;
  display: flex;
  flex-flow: column;
  padding: 0 0 60px 0;
  font-weight: 200;
  margin: 10px 0 0 0;

  p {
    color: var(--teal-ultralight);
    font-size: 14px;
    font-weight: 300;
    margin: 10px 0 0 6px;
  }

  .optional {
    margin: 30px 0 0 6px;
  }

  .loading {
    align-self: center;
    margin: 10px 0;
  }

  button {
    position: fixed;
    margin: 0;
    top: 104px;
    right: 20px;

    p {
      margin: 0;
    }
  }
`
const StyledInputGroup = styled.div`
  /* display: flex;
  flex-direction: column; */
  border-radius: 10px;
  background-color: white;
  margin: 0;
  padding: 15px 10px 15px 10px;
  width: 300px;
  align-self: center;

  label > input {
    margin: 0 0 10px 0;
  }
`

const StyledThumbnail = styled.img`
  display: block;
  width: auto;
  max-width: 300px;
  height: 100px;
  border-radius: 10px;
  border-style: none;
  align-self: center;
  object-fit: cover;
  margin: 10px 0;
`

const StyledImageUpload = styled.div`
  p {
    color: var(--teal-medium);
    font-size: 18px;
    font-weight: 200;
    margin: 0;
  }

  label {
    display: inline-block;
    padding: 6px 12px;
    margin: 5px 0 10px 2px;
    border-radius: 4px;
    background-color: var(--copper-ultralight);
    font-size: 14px;
    color: var(--teal-light);
    box-shadow: 0 0 0 1pt var(--teal-ultralight);

    > [name='image'] {
      position: absolute;
      z-index: -1;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
    }
  }
`
