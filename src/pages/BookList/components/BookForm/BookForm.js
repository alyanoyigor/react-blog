import React from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../components/Input/Input';
import { bookListCreateBookStart } from '../../reducers/bookList';
import { StyledButton, StyledForm } from './styled';

export const BookForm = (props) => {
  const { onCloseModal } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(bookListCreateBookStart({ bookData: data }));
    onCloseModal();
  };

  const inputs = [
    { label: 'Title', name: 'title', required: true },
    { label: 'Description', name: 'description', required: true },
    { label: 'Pages', name: 'pages', required: true },
    { label: 'Excerpt', name: 'excerpt', required: false },
  ];

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          inputOptions={register(input.name, { required: input.required })}
          error={Boolean(errors[input.name])}
          label={input.label}
        />
      ))}
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <StyledButton color="error" type="reset">
          Reset
        </StyledButton>
        <StyledButton variant="contained" type="submit">
          Submit
        </StyledButton>
      </Box>
    </StyledForm>
  );
};
