/**********************Imports*********************** */
import React from "react";
import { PropTypes } from "prop-types";
/**********************Coding**************************** */
const BookSelector = ({ book, handleUpdateShelf }) => 
{
  
  const handleUpdateBookShelf = (e) =>
   {
    const value = e.target.value;
    handleUpdateShelf(book, value);
   }; //end handleUpdateBookShelf
  return (
    <select   onChange={handleUpdateBookShelf}   value={book.shelf ? book.shelf : "none"}   >
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );//end return 
};//end BookSelector

BookSelector.propTypes = 
{
  book: PropTypes.object.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};//end propTypes
export default BookSelector;
