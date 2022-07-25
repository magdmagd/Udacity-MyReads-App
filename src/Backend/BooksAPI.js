/*******************************variables**************************/
const api = "https://reactnd-books-api.udacity.com";
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);


/*****************************Coding************************************/
const headers =
 {
  Accept: "application/json",
  Authorization: token,
 };//end headers

export const get = (bookId) =>                   //Get Specific Book Data
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = () =>                     // Get All Books
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book, shelf) =>         // Update Book Data
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: 
    {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query) =>                 //Retrieve Data from DB 
  fetch(`${api}/search`,
   {
    method: "POST",
    headers:
    {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
   }).then((res) => res.json())
     .then((data) => data.books);
