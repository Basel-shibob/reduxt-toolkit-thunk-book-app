import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletetBook, getBooks } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({})
  const {isLoading , books} = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  },[dispatch])

  const getBookId = (id) => {
    const selectedBook = books.find(el => el.id === id);
    setSelectedBook((prev) => {
      return {...prev, ...selectedBook}
    })
  }

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList 
            isLoading={isLoading}
            books={books}
            deletetBook={deletetBook}
            isLoggedIn={isLoggedIn}
            dispatch={dispatch}
            getBook={getBookId}
          />
        </div>
        <div className='col side-line'>
          <BookInfo info={selectedBook}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
