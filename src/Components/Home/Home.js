import React from "react";
import Shelf from "./Shelf";
import { PropTypes } from "prop-types";
import NavigateToSearch from "../Navigation/NavigateToSearch";
import { Helmet } from "react-helmet-async";

const Home = ({ booksData, handleUpdateShelf }) => {
  return (
    <>
      <Helmet>
        <title>Udacity Nanodegree MyReads Project</title>
        <link rel="canonical" href="/" />
        <meta   name="description"    content=""   />
      </Helmet>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads </h1>
        </div>
        <div className="list-books-content">
          <div>
                       {/* Shelf Types */}
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Currently Reading"
              shelf=    "currentlyReading"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Want To Read"
              shelf=    "wantToRead"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Read"
              shelf=    "read"
            />
          </div>
        </div>
        <NavigateToSearch />
      </div>
    </>
  );
};
Home.propTypes =
 {
  booksData:         PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
 }; //end propTypes

export default Home;
