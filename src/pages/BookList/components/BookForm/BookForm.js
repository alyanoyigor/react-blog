import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { StyledButton, StyledForm } from './styled';

export const BookForm = (props) => {
  const { loading, onCancel, bookOptions, onSubmit } = props;

  const inputs = [
    { label: 'Title', name: 'title', required: true },
    { label: 'Description', name: 'description', required: true },
    { label: 'Pages', name: 'pages', required: true },
    { label: 'Excerpt', name: 'excerpt', required: false },
  ];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: bookOptions });

  useEffect(() => reset(bookOptions), [bookOptions, reset]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          disabled={loading}
          value={watch(input.name)}
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

BookForm.defaultProps = {
  bookOptions: {},
};
