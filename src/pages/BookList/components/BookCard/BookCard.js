import React, { useState, Suspense } from 'react';
import moment from 'moment';
import { Skeleton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Typography } from '@mui/material';

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

export const BookCard = (props) => {
  const { data, handleEditModalOpen, handleDeleteModalOpen } = props;
  const [anchorEl, setAnchorEl] = useState();
  const date = moment(data.date).format('MMM DD, YYYY');

  const onClick = (event) => {
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
        <StyledIconButton aria-describedby={menuId} onClick={onClick}>
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
