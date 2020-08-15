import React, { Component } from 'react'
import { render } from 'react-dom'


let bookList = [
  { "title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260 },
  { "title": "The sun also rises2", "author": "Ernest Hemingway2", "pages": 2260 },
  { "title": "The sun also rises3", "author": "Ernest Hemingway3", "pages": 3360 }
]


const Book = ({ title = "No title", author = 'No author', pages = 0, freeBookmark }) => {
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

  static defaultProps = {
    books: [
      { 'title': 'Tahoe Tales', 'author': 'Chet Witley', 'pages': 1000 }
    ]
  }

  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }


  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }))
  }

  componentDidUpdate() {
    console.log('The component just updated!')
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
        {this.state.loading
          ? 'loading...'
          : <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              )
            })

            }
          </div>

        }
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