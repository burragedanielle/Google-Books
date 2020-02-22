//@ this connects with Google Book's API to gather books

const axios = require('axios');

export default {
    searchBook: (query) => {
        axios.get('/api/google', { params: { query: 'title:' + query } });
    },
    getSavedBooks: () => {
        return axios.get('/api/books');
    }
}