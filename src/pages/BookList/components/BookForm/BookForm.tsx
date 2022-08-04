import React, { useEffect } from 'react';
import { AnyObjectSchema } from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { bookType } from '../../../../propTypes/bookType';
import { Input } from '../../../../components/Input';
import { BookCreate, BookUpdate } from '../../../../types';
import { BookFormSkeleton } from './BookFormSkeleton';
import { StyledButton, StyledForm, StyledButtonsContainer } from './styled';

type FormValues = {
  title: string;
  description: string;
  pages: number;
  excerpt: string;
};

type BookFormProps = {
  loading: boolean;
  onCancel: () => void;
  onSubmit: (data: any) => void;
  schema: AnyObjectSchema;
  bookOptions?: BookCreate | BookUpdate | Record<string, never>;
  fetchLoading?: boolean;
};

export const BookForm = (props: BookFormProps) => {
  const { loading, fetchLoading, onCancel, bookOptions, onSubmit, schema } =
    props;

  const inputs: { label: string; name: keyof FormValues }[] = [
    { label: 'Title', name: 'title' },
    { label: 'Description', name: 'description' },
    { label: 'Pages', name: 'pages' },
    { label: 'Excerpt', name: 'excerpt' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: bookOptions,
    resolver: yupResolver(schema),
  });

  useEffect(() => reset(bookOptions), [bookOptions, reset]);

  return (
    <>
      {fetchLoading && <BookFormSkeleton inputs={inputs} />}
      {!fetchLoading && (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => (
            <Input
              key={input.name}
              disabled={loading}
              valueWatcher={watch(input.name)}
              inputOptions={register(input.name)}
              error={errors[input.name]?.message}
              label={input.label}
            />
          ))}
          <StyledButtonsContainer
            display="flex"
            gap="4px"
            justifyContent="flex-end"
          >
            <StyledButton disabled={loading} onClick={onCancel}>
              Cancel
            </StyledButton>
            <StyledButton
              disabled={loading}
              loading={loading}
              variant="contained"
              type="submit"
            >
              Submit
            </StyledButton>
          </StyledButtonsContainer>
        </StyledForm>
      )}
    </>
  );
};

BookForm.defaultProps = {
  bookOptions: {},
  fetchLoading: false,
};

BookForm.propTypes = {
  fetchLoading: PropTypes.bool,
  bookOptions: PropTypes.shape(bookType),
  loading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
};
