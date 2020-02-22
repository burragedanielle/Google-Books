import React, { Component } from 'react';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import SearchArea from '../components/SearchArea';
// import BookList from '../components/BookList';
import API from '../utils/API';

class Main extends Component {

    state = {
        books: [],
        q: '',
        message: 'Begin Book Search!'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = () => {
        API.searchBook(this.state.q)
            .then(res =>
                this.setState({
                    books: [res.data]
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: 'No new books found. Search a new title!'
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchArea
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q} />

                <div className='container'>
                    {
                        this.state.books.length ? (
                            <div className='row'>
                                {
                                    this.state.books.map((book, i) => {
                                        return <BookCard
                                            key={i}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            title={book.volumeInfo.title}
                                            author={book.volumeInfo.authors}
                                            published={book.volumeInfo.publishedDate}
                                            handleSave={() => this.handleSave(book.id)} />
                                    })
                                }
                            </div>
                        ) : (
                                <h2 className='text-center'>{this.state.message}</h2>
                            )
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Main;