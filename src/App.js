import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { BookItem } from './pages/BookItem';
import { BookList } from './pages/BookList';
import { Home } from './pages/Home';
import { Statistics } from './pages/Statistics';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="books">
          <Route index element={<BookList />} />
          <Route path=":bookId" element={<BookItem />} />
        </Route>
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;
