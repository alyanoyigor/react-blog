import * as yup from 'yup';

export const bookEditSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  pages: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === '' ? null : currentValue;
    })
    .nullable()
    .typeError('Must be a number')
    .required(),
  excerpt: yup.string(),
});
