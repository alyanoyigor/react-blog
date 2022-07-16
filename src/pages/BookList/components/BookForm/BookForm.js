import React from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Input } from '../../../../components/Input';
import { bookListCreateBookStart } from '../../thunks/bookListCreateBook';

import { StyledButton, StyledForm } from './styled';

export const BookForm = (props) => {
  const { loading, onCancel } = props;

  const inputs = [
    { label: 'Title', name: 'title', required: true },
    { label: 'Description', name: 'description', required: true },
    { label: 'Pages', name: 'pages', required: true },
    { label: 'Excerpt', name: 'excerpt', required: false },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(bookListCreateBookStart({ bookData: data }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          disabled={loading}
          inputOptions={register(input.name, { required: input.required })}
          error={Boolean(errors[input.name])}
          label={input.label}
        />
      ))}
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <StyledButton disabled={loading} color="error" onClick={onCancel}>
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
      </Box>
    </StyledForm>
  );
};
