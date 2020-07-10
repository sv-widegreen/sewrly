import React from 'react'
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
      name="name"
      validator="yup.string().max(35).required()"
      errorType="max"
      errorMessage="Make it short and sweet!"
      errorType2="required"
      errorMessage2="Surely you can think of a name for your project!"
    />
    <InputField
      labelText="Where did you find the pattern?"
      placeholderText="or did you draft it yourself?"
      name="pattern"
      validator="yup.string().max(35)"
      errorType="max"
      errorMessage="The text is too long unfortunately."
    />
    <InputField
      labelText="If there's a size, which one?"
      placeholderText="type here"
      name="size"
      validator="yup.string().max(25)"
      errorType="max"
      errorMessage="Please cut the size of this text!"
    />
    <InputField
      labelText="What's the next step?"
      placeholderText="e.g. buy materials, cut fabric, sew..."
      name="nextStep"
      validator="yup.string().max(50).required()"
      errorType="max"
      errorMessage="Please keep it short!"
      errorType2="required"
      errorMessage2="This is the reason why you are using this app!"
    />
  </>
)
