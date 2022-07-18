import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../../../components/Input';
import { StyledButton, StyledForm } from './styled';

export const BookForm = (props) => {
  const { loading, onCancel, bookOptions, onSubmit, schema } = props;

  const inputs = [
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
  } = useForm({
    defaultValues: bookOptions,
    resolver: yupResolver(schema),
  });

  useEffect(() => reset(bookOptions), [bookOptions, reset]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <Input
          key={input.name}
          disabled={loading}
          valueWatcher={watch(input.name)}
          inputOptions={register(input.name)}
          error={errors[input.name]}
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
