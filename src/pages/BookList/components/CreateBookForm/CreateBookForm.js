import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../components/Input/Input';
import { bookListAddBookStart } from '../../reducers/bookList';
import { StyledForm } from './styled';

export const CreateBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(bookListAddBookStart({ bookData: data }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputOptions={register('title', { required: true })}
        error={Boolean(errors.title)}
        label="Title"
      />
      <Input
        inputOptions={register('description', { required: true })}
        error={Boolean(errors.description)}
        label="Description"
      />
      <Input
        type="number"
        inputOptions={register('pages', { required: true })}
        error={Boolean(errors.pages)}
        label="Pages"
      />
      <Input
        inputOptions={register('excerpt')}
        error={Boolean(errors.excerpt)}
        label="Excerpt"
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </StyledForm>
  );
};
