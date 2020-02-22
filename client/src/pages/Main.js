import React, { Component } from 'react';
import Header from '../components/Header';
import Books from '../components/Books';
import SearchArea from '../components/SearchArea';
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
                <Books books={this.state.books} />
            </React.Fragment>
        );
    }
}

export default Main;