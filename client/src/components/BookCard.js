import React from 'react';
import '../App.css';

const BookCard = (props) => {
    return (
        <div className='col-lg-12'>
            <div className='card'>
                <img src={props.image} className='card-img-top' alt='' />
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <h3 className='card-text'>{props.author}</h3>
                </div>
                <div className='card-footer'>
                    <p className='card-text'>{props.published}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCard; 