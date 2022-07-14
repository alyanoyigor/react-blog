import React, { useState } from 'react';
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Typography } from '@mui/material';
import { CardMenu } from './CardMenu';
import { BookImage } from './BookImage';
import {
  StyledCardContainer,
  StyledBookCard,
  StyledIconButton,
  StyledShortText,
} from './styled';

export const BookCard = (props) => {
  const { title, description, _id: bookId, date: publishDate, index } = props;
  const [anchorEl, setAnchorEl] = useState();
  const date = moment(publishDate).format('MMM DD, YYYY');

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
          menuId={menuId}
          bookId={bookId}
          open={open}
          anchorEl={anchorEl}
        />
        <BookImage index={index} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body1" color="text.main">
            {date}
          </Typography>
          <StyledShortText variant="body2" color="text.secondary">
            {description}
          </StyledShortText>
        </CardContent>
      </StyledBookCard>
    </StyledCardContainer>
  );
};
