//@ this connects with Google Book's API to gather books

const axios = require('axios');

export default {
    searchBook: (query) => {
        return axios.get('/api/google', { params: { query: 'title:' + query } });
    },
    getSavedBooks: () => {
        return axios.get('/api/books');
    }
}