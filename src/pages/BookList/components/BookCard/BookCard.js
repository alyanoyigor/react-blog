import React, { useState } from 'react';
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardMenu } from './CardMenu';
import {
  StyledCardContainer,
  StyledBookCard,
  StyledIconButton,
  StyledShortText,
  StyledText,
} from './styled';

export const BookCard = (props) => {
  const { title, description, id, publishDate } = props;
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
      <StyledBookCard variant="outlined">
        <StyledIconButton aria-describedby={menuId} onClick={onClick}>
          <MoreVertIcon fontSize="small" />
        </StyledIconButton>
        <CardMenu
          onClose={handleClose}
          menuId={menuId}
          bookId={id}
          open={open}
          anchorEl={anchorEl}
        />
        <StyledText>
          <strong>Name:</strong> {title}
        </StyledText>
        <StyledShortText>
          <strong>Description:</strong> {description}
        </StyledShortText>
        <StyledText>
          <strong>Date:</strong> {date}
        </StyledText>
      </StyledBookCard>
    </StyledCardContainer>
  );
};
