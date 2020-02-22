import React, { Component } from 'react';
import SearchArea from './SearchArea';
import Booklist from './Booklist';
import axios from 'axios';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`)
            .then(res => {
                console.log(res.data.items);
                this.setState({ books: [...res.data.items] });
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <div className='container'>
                    <Booklist books={this.state.books} />
                </div>
            </div>
        );
    }
}

export default Books;