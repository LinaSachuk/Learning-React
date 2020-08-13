import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p> Pages: {pages}</p>
    </section>
  )
}



const Library = () => {
  return (
    <div>
      <Book title="The sun also rises" author="Ernest Hemingway" pages={260} />
      <Book title="Memories of my melancholy whores" author="Gabriel Garcia Marquez" pages={360} />
      <Book title="Hi hi" author="Hemingway" pages={240} />

    </div>
  )
}






render(
  <Library />,
  document.getElementById('root')
)