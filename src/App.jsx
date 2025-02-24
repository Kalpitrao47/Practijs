import { Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import Pagination from './Components/Pagination';
import Modal from './Components/Modal';
import LazyImage from './Components/LazyImage';
import Form from './Components/Form';
import ReactHookFrom from './Components/ReactHookFrom';
import PaginationSelf from './Components/PaginationSelf';
import Todo from './Components/Todo';


function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<Pagination />} />
        <Route path="/search" element={<Search />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/lazyLoadingimage" element={<LazyImage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/reactHook" element={<ReactHookFrom />} />
        <Route path="/paginationSelf" element={<PaginationSelf />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
