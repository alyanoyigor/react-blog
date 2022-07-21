import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { StyledSkeleton, StyledButtonsContainer } from '../styled';

export const BookFormSkeleton = (props) => {
  const { inputs } = props;

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {inputs.map((input) => (
        <StyledSkeleton key={input.name} height={40} />
      ))}
      <StyledButtonsContainer
        display="flex"
        gap="4px"
        justifyContent="flex-end"
      >
        <StyledSkeleton width={100} height={36} />
        <StyledSkeleton width={100} height={36} />
      </StyledButtonsContainer>
    </Box>
  );
};

BookFormSkeleton.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, name: PropTypes.string })
  ).isRequired,
};
