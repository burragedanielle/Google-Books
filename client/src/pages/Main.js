import React, { Component } from 'react';
import Header from '../components/Header';
import Books from '../components/Books';
import SearchArea from '../components/SearchArea';
import API from '../utils/API';

class Main extends Component {
    state = {
        books: [],
        query: '',
        message: 'Begin Book Search!'
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = () => {
        API.searchBook(this.state.query)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: 'No new books found. Search a new title!'
                })
            );
    };

    handleSearch = e => {
        e.preventDefault();
        this.searchBook();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}
                    query={this.state.query} />
                <Books books={this.state.books} />
            </React.Fragment>
        );
    }
}

export default Main;