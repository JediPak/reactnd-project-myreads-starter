import React, { Component } from 'react'
import Book from './Book';

class Bookshelf extends Component {

    // book object
    // - url
    // - title
    // - author
    // - status
    state = {
        width: 128,
        height: 193

    }
    render() {
        // const { } = this.state;
        const { books, title } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} />
                            </li>

                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
