import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<BookLayout />}>
          <Route path="list" element={<BookList />} />
          <Route path=":item" element={<BookItem />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
