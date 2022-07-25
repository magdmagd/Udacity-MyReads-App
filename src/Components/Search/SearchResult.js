/************************* Imports ************************* */
import React, { useDeferredValue } from "react";
import { PropTypes } from "prop-types";
import Book from "../Home/Book/Book";

/*********************************  Coding ************************ */
const SearchResult = ({ handleUpdateShelf, searchQuery, mergedBooks }) =>
{
                            /* Define Constants  */
  const noData = <div className="no_data">There is  no data to show it </div>;  
  const defMergedBooks = useDeferredValue(mergedBooks);


  return (
    <div className="search-books-results">
      <ol className="books-grid">
     {defMergedBooks && searchQuery ?  defMergedBooks.map((book) => 
      {     
              return (                
                     <Book    key={book.id}        book={book}     handleUpdateShelf={handleUpdateShelf}      />
                    ); //end Return
      }) : noData}    {/*end map function*/} 
         
      </ol>
    </div>
  );
};

SearchResult.propTypes = 
{
  handleUpdateShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
};//end propTypes


export default SearchResult;
