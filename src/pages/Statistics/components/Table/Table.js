import React from 'react';
import {
  Paper,
  Table as MUITable,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTableCell, StyledTableRow } from './styled';
import moment from 'moment';

export const Table = (props) => {
  const { bookList } = props;

  return (
    <TableContainer component={Paper}>
      <MUITable>
        <TableHead>
          <TableRow>
            <StyledTableCell component="th">Id</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Publish date</StyledTableCell>
            <StyledTableCell>Page count</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookList.map((book) => {
            const date = moment(book.publishDate).format('MMM DD, YYYY');
            return (
              <StyledTableRow key={book.id}>
                <StyledTableCell component="th" scope="row">
                  {book.id}
                </StyledTableCell>
                <StyledTableCell>{book.title}</StyledTableCell>
                <StyledTableCell>{date}</StyledTableCell>
                <StyledTableCell>{book.pageCount}</StyledTableCell>
                <StyledTableCell>{book.description}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
