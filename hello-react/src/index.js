import React, { Component } from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
  { "title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260 },
  { "title": "The sun also rises2", "author": "Ernest Hemingway2", "pages": 2260 },
  { "title": "The sun also rises3", "author": "Ernest Hemingway3", "pages": 3360 }
]


render(
  <Library books={bookList} />,
  document.getElementById('root')
)