import React, { Component } from 'react'
import { render } from 'react-dom'


let bookList = [
  { "title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260 },
  { "title": "The sun also rises2", "author": "Ernest Hemingway2", "pages": 2260 },
  { "title": "The sun also rises3", "author": "Ernest Hemingway3", "pages": 3360 }
]


const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p> Pages: {pages}</p>
    </section>
  )
}



class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }



  render() {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
        <h1> The library is {this.state.open ? 'open' : 'closed'} </h1>
        {
          books.map(
            (book, i) =>
              < Book
                key={i}

                title={book.title}
                author={book.author}
                pages={book.pages}
              />
          )
        }
      </div>
    )
  }
}







render(
  <Library books={bookList} />,
  document.getElementById('root')
)