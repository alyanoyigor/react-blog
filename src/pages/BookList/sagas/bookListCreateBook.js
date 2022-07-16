// import { toast } from 'react-toastify';
// import { put, call, takeLatest } from 'redux-saga/effects';
// import { createBook } from '../../../api/books';
// import { modalToggleOpen } from '../../../components/Modal/reducers/modal';
// import { bookListFetchStart } from '../reducers/bookList';
// import {
//   bookListCreateBookError,
//   bookListCreateBookInProgress,
//   bookListCreateBookStart,
//   bookListCreateBookSuccess,
// } from '../reducers/bookListCreateBook';

// function* bookListCreateBookSaga({ payload: { bookData } }) {
//   try {
//     yield put(bookListCreateBookInProgress());
//     yield new Promise((resolve) => setTimeout(resolve, 2000));
//     yield call(createBook, bookData);
//     yield put(bookListFetchStart());
//     yield put(modalToggleOpen());
//     yield put(bookListCreateBookSuccess({ data: bookData }));
//     toast.success('Book has been created successfully!');
//   } catch (error) {
//     yield put(bookListCreateBookError());
//     toast.error(error._message);
//   }
// }

// export function* bookListCreateBookWatcher() {
//   yield takeLatest(bookListCreateBookStart.type, bookListCreateBookSaga);
// }
