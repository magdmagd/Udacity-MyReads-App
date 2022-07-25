### MyReads Udacity React Project

## Table of Contents

- [Overview]
- [Structure]
- [Installation] 
- [Backend]
- [Search]
- [ScreenShots]


## Overview :
-This is Single Page App Supports Search for books then Detects the Shelf that will be displayed on it 
  [Currently Reading ,Want to Read , Read ] , Also You Can Change its shelf by Update selection state on book on any shelf
- This is 1st project in EGFWD initiative & Udacity program 


## Structure

├── README.md    # This file (Project Documentation)
├── package.json #npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html  #  DO NOT MODIFY
│   └──  Images ├── HomePage.png    # View Home Page Screenshot
                ├── SearchPage.png  # View Home Page SearchPage
│
└── src
     ├── Components
     │    ├── Home ────├── Home.js   #Home Components File
     │    │            ├── Shelf.js  #Shelf Components File
     │    │            └── Book──|── Book.js          #Book Components File
     │    |                      |── BookSelector.js  #BookSelector Components File
     │    ├── Navigation──|── NavigateToHome.js       #Component that redirect to Home Page
     │    |               |── NavigateToSearch.js     #Component that redirect to Search Page
     │    │               
     │    └── Search.js ──|── Search.js           #Search Component File
     │                    |── SearchResult.js     #Search Result Component File (Retieve Data from DB)
     │
     │── Basic────├── Error.js                   # Error Component File shows the Error Page at Redirection to erro path
     │            ├── UseHookQuery.js            #Hook Component to Retreive Data
     │
     ├── Backend────|── BookAPI.js A JavaScript API for the provided Udacity backend. Instructions for the methods are below
     │
     │── Style   ───├── App.css # Styles for your app. Feel free to customize this as you desire.
     │              ├── index.css # Global styles. You probably won't need to change anything here.
     │              ├── icons # Helpful images for your app. Use at your discretion.     │ 
     │                   ├── add.svg
     │                   ├── arrow-back.svg
     │                   └── arrow-drop-down.svg
     │
     ├── App.js # This is the root of your app. Contains static HTML right now.
     └── index.js # You should not need to modify this file. It is used for DOM rendering only.




## Installation
- install `Node js` on the local machine . 
- clone it or download repo then in terminal write these command .
- Install all project dependencies with`npm install` .
- Then Run `npm start`.



## Backend Service 

Udacity provided a backend server to help developers for developing its app
[Udacity](https://github.com/udacity/reactnd-project-myreads-starter) has provided this file
[BooksAPI.js](src/Backend/BooksAPI.js) that contains the following methods to perform necessary operations on the backend:

* [getAll()] To get all books from API
* [update()] To Update bookshelf
* [search()] To Search 


## Search Terms
The backend API uses a fixed set of Search Terms , which can be found B/M :
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


## ScrrenShots
[HomePageScreenShot](public/images/HomPage.png)
[SearchPageScreenShot](public/images/SearchPage.png)

