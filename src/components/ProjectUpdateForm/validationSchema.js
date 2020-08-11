import * as yup from 'yup'

export const validationSchemaUpdate = yup.object().shape({
  projectName: yup.string().max(20).required(),
  nextStep: yup.string().max(50),
  notes: yup.string().max(500),
  pattern: yup.string().max(35),
  size: yup.string().max(25),
  materialNeeds: yup.string().max(200),
  materialsExisting: yup.string().max(200),
})
