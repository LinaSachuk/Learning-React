import React, { Component } from 'react'
import { render } from 'react-dom'


let bookList = [
  { "title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260 },
  { "title": "The sun also rises2", "author": "Ernest Hemingway2", "pages": 2260 },
  { "title": "The sun also rises3", "author": "Ernest Hemingway3", "pages": 3360 }
]


const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p> Pages: {pages}</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no'}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is NOT hiring.</p>
  </div>


class Library extends React.Component {

  state = {
    open: true,
    freeBookmark: true,
    hiring: true
  }


  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }


  render() {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1> The library is {this.state.open ? 'open' : 'closed'} </h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {
          books.map(
            (book, i) =>
              < Book
                key={i}

                title={book.title}
                author={book.author}
                pages={book.pages}
                freeBookmark={this.state.freeBookmark}
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