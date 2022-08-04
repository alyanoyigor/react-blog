import React, { useState, Suspense, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Skeleton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Typography } from '@mui/material';

import { bookType } from '../../../../propTypes/bookType';
import { Book } from '../../../../types';
import { CardMenu } from './CardMenu';
import {
  StyledCardContainer,
  StyledBookCard,
  StyledIconButton,
  StyledShortText,
} from './styled';

const BookImage = React.lazy(() =>
  import('./BookImage').then((module) => ({
    default: module.BookImage,
  }))
);

type BookCardProps = {
  data: Book;
  handleEditModalOpen: (data: Book) => void;
  handleDeleteModalOpen: (data: Book) => void;
};

export const BookCard = (props: BookCardProps) => {
  const { data, handleEditModalOpen, handleDeleteModalOpen } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const date = moment(data.date).format('MMM DD, YYYY');

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const menuId = open ? 'simple-popover' : undefined;

  return (
    <StyledCardContainer>
      <StyledBookCard>
        <StyledIconButton onClick={onClick}>
          <MoreVertIcon />
        </StyledIconButton>
        <CardMenu
          onClose={handleClose}
          handleEdit={handleEditModalOpen}
          handleDelete={handleDeleteModalOpen}
          bookData={data}
          menuId={menuId}
          open={open}
          anchorEl={anchorEl}
        />
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ bgcolor: 'grey.900' }}
            />
          }
        >
          <BookImage />
        </Suspense>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {data.title}
          </Typography>
          <Typography variant="body1" color="text.main">
            {date}
          </Typography>
          <StyledShortText variant="body2" color="text.secondary">
            {data.description}
          </StyledShortText>
        </CardContent>
      </StyledBookCard>
    </StyledCardContainer>
  );
};

BookCard.propTypes = {
  data: PropTypes.shape(bookType).isRequired,
  handleEditModalOpen: PropTypes.func.isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
};
