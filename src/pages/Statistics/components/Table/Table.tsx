import React from 'react';
import {
  Paper,
  Table as MUITable,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';

import { Book } from '../../../../types';
import { StyledTableCell, StyledTableRow } from './styled';

type TableProps = {
  bookList: Book[];
};

export const Table: React.FC<TableProps> = (props) => {
  const { bookList } = props;

  return (
    <TableContainer component={Paper}>
      <MUITable>
        <TableHead>
          <TableRow>
            <StyledTableCell component="th">#</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Publish date</StyledTableCell>
            <StyledTableCell>Page count</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookList.map((book, index) => {
            const date = moment(book.date).format('MMM DD, YYYY');
            return (
              <StyledTableRow key={book._id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{book._id}</StyledTableCell>
                <StyledTableCell>{book.title}</StyledTableCell>
                <StyledTableCell>{date}</StyledTableCell>
                <StyledTableCell>{book.pages}</StyledTableCell>
                <StyledTableCell>{book.description}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
