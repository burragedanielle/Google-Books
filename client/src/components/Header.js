import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-light bg-light'>
                <h1>BookWorm</h1>
                <p>Discover and save your favorite books to a reading list powered by Google Books.</p>
                <i className='fas fa-book-reader'></i>
            </nav>
        </header>
    );
}

export default Header;

