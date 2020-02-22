import React from 'react';

const SearchArea = (props) => {
    return (
        <div className='search-area'>
            <form action=''>
                <input
                    onChange={props.handleInputChange}
                    id='title'
                    type='text'
                    value={props.q}
                    placeholder='Search your book here!'
                    name='q'
                    required />
                <button
                    onClick={props.handleFormSubmit}
                    type='submit'
                    className='btn'>Search</button>
            </form>
        </div>
    );
}

export default SearchArea;
