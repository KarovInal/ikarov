import * as React from 'react';

type IBook = {
  cover: 'string',
  label: 'string'
}

const Books = ({ books }: Array<IBook>) => {
  const BookList = books.map(({ cover, label }) => (
    <div className="book-container">
      <img className="book-cover" src={cover} />
      <p className="book-label">{ label }</p> 
      <style jsx>{`
        .book-container {
          display: flex;
          flex-direction: column;
          width: 200px;
          margin: 5px 10px;
        }

        .book-cover {
          width: 100%;
          height: auto;
        }

        .book-labe {
          font-size: 18px;
        }
      `}</style>
    </div>
  ))

  return (
    <div className="books-wrap">
      { BookList }
      <style jsx>{`
        .books-wrap {
          display: flex;
          flex-direction: colunn;
          max-width: 700px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

export default Books;
