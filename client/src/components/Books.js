import React, { Component } from 'react';
import Booklist from './Booklist';

class Books extends Component {
    render(props) {
        return (
            <React.Fragment>
                <div className='container'>
                    <Booklist books={this.props.books} />
                </div>
            </React.Fragment>
        );
    }
}

export default Books;