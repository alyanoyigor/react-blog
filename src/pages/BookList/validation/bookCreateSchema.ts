import * as yup from 'yup';

export type BookCreateSchema = {
  title: string;
  description: string;
  pages: number;
  excerpt?: string;
};

export const bookCreateSchema: yup.SchemaOf<BookCreateSchema> = yup.object({
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
