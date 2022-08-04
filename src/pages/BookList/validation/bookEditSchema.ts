import * as yup from 'yup';

export type BookUpdateSchema = {
  title: string;
  description: string;
  pages: number;
  excerpt?: string;
};

export const bookEditSchema: yup.SchemaOf<BookUpdateSchema> = yup.object({
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
