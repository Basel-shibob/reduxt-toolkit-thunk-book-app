import React from 'react';

const BooksList = ({isLoggedIn, isLoading, books, deletetBook, dispatch ,getBook}) => {


  const bookList = books.length > 0 ? books.map(itme => (
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={itme.id}>
      <div>{itme.title}</div>
      <div className='btn-group' role='group'>
        <button type='button' className='btn btn-primary' disabled={!isLoggedIn} onClick={() => getBook(itme.id)}>
          Read
        </button>
        <button 
          type='button'
          className='btn btn-danger' 
          disabled={!isLoggedIn} 
          onClick={() => dispatch(deletetBook(itme))
            .unwrap()
            .then((originalPromiseResult) => {
              // handle result here
              console.log(originalPromiseResult)
            })
            .catch((rejectedValueOrSerializedError) => {
              // handle error here
              console.log(rejectedValueOrSerializedError)
            })
          }
        >
          Delete
        </button>
      </div>
    </li>
  )) : 'There is no books available!'; 

  return (
    <div>
      <h2>Books List</h2>

      {isLoading ? 'loading...' : (
        <ul className='list-group'>
          {bookList}
        </ul>
      )
      }
    </div>
  );
};

export default BooksList;
