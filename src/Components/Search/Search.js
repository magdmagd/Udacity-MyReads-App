/**************************************Imports******************************** */
import React from "react";
import NavigateToHome from "../Navigation/NavigateToHome";
import SearchResult from "./SearchResult";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";




/*************************************Coding************************************** */
const Search = ({ handleSearchQuery, searchQuery,  handleUpdateShelf,  mergedBooks }) => 
  {
  return (
    <>
      <Helmet>
        <title>MyRead App Search Page</title>
        <link rel="canonical" href="/search" />
        <meta
          name="description"
          content="Provide Search Ability"
        />
      
      </Helmet>
      <div className="search-books">
        <div className="search-books-bar">
        <NavigateToHome />
          <div className="search-books-input-wrapper">
            <input
              type="text"   value={searchQuery}   placeholder="Search by Title or Author"    onChange={handleSearchQuery}  />
          </div>
        </div>
        { <SearchResult   searchQuery={searchQuery}   mergedBooks={mergedBooks}       handleUpdateShelf={handleUpdateShelf}   /> }
      </div>
    </>
  );//end return
};

Search.propTypes = 
{
  handleSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
}; //end Search.propTypes
export default Search;
