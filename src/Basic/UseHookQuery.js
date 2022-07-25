/***************************Imports************************** */
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { search } from "../Backend/BooksAPI";


/****************************Coding******************************** */
const UseHookQuery = (searchQuery) => 
{
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  const [valueSearch] = useDebounce(searchQuery, 500);
 
  useEffect(() => 
  {
    let isActive = true;
    if (valueSearch) 
    {
      search(valueSearch).then((data) => 
      {
        if (data.error) 
        {
          setSearchBookQuery([]);
        }//end if 
        else 
        {
          if (isActive) 
          {
            setSearchBookQuery(data);
          }//end if
        }//end else 
      });//end search function
    }//end if
    return () =>
     {
      isActive = false;
      setSearchBookQuery([]);
     };
  }, [valueSearch]);
  return [searchBookQuery, setSearchBookQuery];
};//end useHookQuery

export default UseHookQuery;
