/********************************Imports********************************** */
import React from "react";
import Book from "./Book/Book";
import { PropTypes } from "prop-types";

/*********************************Coding************************************** */
const Shelf = ({ titleName, booksData, shelf, handleUpdateShelf }) => 
{
  
 const bookShelf = booksData.filter((book) => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titleName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf.map((book) => 
          (
            <div key={book.id}>
              <Book book={book} handleUpdateShelf={handleUpdateShelf} />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = 
{
  titleName: PropTypes.string.isRequired,
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
}; //end PropTypes
export default Shelf;
