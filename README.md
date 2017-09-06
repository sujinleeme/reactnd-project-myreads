# reactnd-project-myreads

This is a myreads website project for [Udacity’s React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). The bookshelf app allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that it should be persisted information as user’s interacts with the application.

## Table of contents
- [Demo](#demo)
- [Download](#download)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Copyright and License](#copyright-and-license)

## Demo
For a demo, check out [https://sujinlee-reactnd-project.firebaseapp.com/](https://sujinlee-reactnd-project.firebaseapp.com/)

## Quick Start
### Running locally
```
git clone https://github.com/sujinleeme/reactnd-project-myreads.git
cd reactnd-project-myreads
npm install
npm start
```

### To get started developing right away:
```
install all project dependencies with npm install
start the development server with npm start or yarn start
```
## Documentation
### What's included
Within the download you'll find the following directories and files:
```
|-- package.json
`-- src
    |-- App.js
    |-- App.test.js
    |-- Component
    |   |-- BookShelf
    |   |   |-- BookDetailButton.js
    |   |   |-- BookShelfContainer.js
    |   |   `-- BookShelfItem.js
    |   |-- MyBookList
    |   |   `-- MyBookList.js
    |   |-- Notification
    |   |   `-- Info.js
    |   `-- Search
    |       |-- Autocomplete
    |       |   |-- Autocomplete.js
    |       |   |-- AutocompleteItem.js
    |       |   `-- SearchInput.js
    |       `-- SearchBooks.js
    |-- fire.js 
    |-- icons
    |-- index.css
    |-- index.js
    |-- style
    |   `-- App.css
    `-- utils
        |-- BooksAPI.js
        |-- ClickOutsideBehavior.js
        |-- Common.js
        `-- SearchKeywords.js

```
### Functionality (requirements)
In this application, the main page(the root URL)displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

When you select a different shelf, the book moves there.
In search page(`/search`), you can get the list of books as by your input keywords.

### Additional Functionality
#### React autocomplete component
 Autocomplete, or word completion, is a feature that I created additionally, in which an application predicts the rest of a book category a user is typing. [Here](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md) is the whitelisted short collection of available search terms in starter repo.
> This feature isn't completed yet. Later, I will improve slightly as following [#issue](https://github.com/sujinleeme/reactnd-project-myreads/issues/5). (Aug. 31. 2017)


####  Hosting React app with Firebase hosting
 The app runs on live Firebase server now.


## Copyright and License 
A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.

