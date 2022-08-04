import { RootState } from '../../../store';
// import {
//   bookListCurrentBooksSelector,
//   bookListPaginationSelector,
// } from './bookList';

// describe('bookList selectors', () => {
//   let state: RootState;
//   beforeEach(() => {
//     state = {
//       bookList: {
//         fetchBooks: {
//           data: Array.from(Array(10), (_value, index) => ({ id: index + 1 })),
//           error: null,
//           loading: true,
//         },
//       },
//       pagination: { currentPage: 1, itemsPerPage: 5 },
//     };
//   });

//   describe('bookListCurrentBooksSelector', () => {
//     test('should return 5 books when books length bigger than 5 and per page have 5 items', () => {
//       const slicedBooks = bookListCurrentBooksSelector(state);

//       expect(slicedBooks.length).toEqual(5);
//     });

//     test('should return all existing books when items per page bigger than books length', () => {
//       state.pagination.itemsPerPage = 15;

//       const slicedBooks = bookListCurrentBooksSelector(state);
//       expect(slicedBooks.length).toEqual(10);
//     });

//     test('should do not compute with same data', () => {
//       bookListCurrentBooksSelector.resetRecomputations();

//       bookListCurrentBooksSelector(state);
//       expect(bookListCurrentBooksSelector.recomputations()).toEqual(1);

//       bookListCurrentBooksSelector(state);
//       expect(bookListCurrentBooksSelector.recomputations()).toEqual(1);
//     });

//     test('should recompute with new page', () => {
//       bookListCurrentBooksSelector.resetRecomputations();
//       bookListCurrentBooksSelector(state);

//       state = {
//         ...state,
//         pagination: { ...state.pagination, currentPage: 2 },
//       };

//       bookListCurrentBooksSelector(state);
//       expect(bookListCurrentBooksSelector.recomputations()).toEqual(2);
//     });
//   });

//   describe('bookListPaginationSelector', () => {
//     test('should return correct pagination data', () => {
//       const paginationData = bookListPaginationSelector(state);
//       const expectedData = {
//         currentPage: state.pagination.currentPage,
//         booksPerPage: state.pagination.itemsPerPage,
//       };

//       expect(paginationData).toEqual(expectedData);
//     });

//     test('should do not compute with same data', () => {
//       bookListPaginationSelector.resetRecomputations();

//       bookListPaginationSelector(state);
//       expect(bookListPaginationSelector.recomputations()).toEqual(1);

//       bookListPaginationSelector(state);
//       expect(bookListPaginationSelector.recomputations()).toEqual(1);
//     });

//     test('should do not compute when changes not the pagination data', () => {
//       bookListPaginationSelector.resetRecomputations();
//       bookListPaginationSelector(state);

//       state = {
//         ...state,
//         bookList: {
//           ...state.bookList,
//           fetchBooks: { ...state.bookList.fetchBooks, error: 'ERROR' },
//         },
//       };

//       bookListPaginationSelector(state);

//       expect(bookListPaginationSelector.recomputations()).toEqual(1);
//     });
//   });
// });
