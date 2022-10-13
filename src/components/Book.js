import React, { Component } from 'react'
import Options from './Options';

class Book extends Component {

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
        const { width, height } = this.state;
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: width,
                            height: height,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}>
                    </div>
                    <Options />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div >
        )
    }
}

export default Book
