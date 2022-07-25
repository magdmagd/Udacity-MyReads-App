/**************************** Imports ****************************** */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./Backend/BooksAPI";
import Home from "./Components/Home/Home" ;
import Search from "./Components/Search/Search";
import Error from "./Basic/Error"; 
import UseHookQuery from "./Basic/UseHookQuery";
import "./Style/App.css";

/***************************** Coding ******************* */

function App() 
{
  
  const [booksData,   setBooksData] = useState([]);  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookQuery, setSearchBookQuery] = UseHookQuery(searchQuery);  
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapOfIdBooks] = useState(new Map());

  const exeSearchQuery = (e) =>                        /* Handle Search Query */ 
  {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
  };//end handleSearchQuery

  
  
  const exeUpdateShelf = async (book, shelf) =>       /* Handle Update Shelf Change Value */
  {
    await update(book, shelf);
    getAllBooksData();
  };//end handleUpdateShelf


  const getAllBooksData = async () =>                     /* Handle Get All Books of Data*/
  {
    await getAll().then((res) => 
    {
      setBooksData(res);
      setMapOfIdBooks(createMapOfBooks(res));
    });
  };//end getAllBooksData

  const createMapOfBooks = (books) =>                /*Create Map of books */
  {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };//end createMapofBooks

  
  useEffect(() =>
   {
    const combiningBooksShelf = searchBookQuery.map((book) => 
    {
      if (mapOfIdBooks.has(book.id))
       {
        return mapOfIdBooks.get(book.id);
       }//end if 
       else 
       {
        return book;
       }//end else
    }); 
    setMergedBooks(combiningBooksShelf);
  }, [searchBookQuery]);//end use effect

  
  useEffect(() => 
  {
    getAllBooksData();
  }, []);//end useEffect 

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element=
          {
            <Search
              mergedBooks={mergedBooks}
              searchQuery={searchQuery}
              handleSearchQuery={exeSearchQuery}
              handleUpdateShelf={exeUpdateShelf}
            />
          }//end element
        />
        <Route path="/"    element={ <Home booksData={booksData} handleUpdateShelf={exeUpdateShelf} /> }     />        
        <Route path="*"    element={<Error />} /> {/* Route to Error Path  */}
      </Routes>
    </div>
  );//end return 
}//end App

export default App;
