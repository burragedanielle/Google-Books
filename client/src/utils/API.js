//@ this connects with Google Book's API to gather books
const axios = require('axios');

export default {
    searchBook: (q) => {
        console.log('arrived here 1');
        return axios.get('/api/google', { params: { q: 'title:' + q } });
    },
    getSavedBooks: () => {
        return axios.get('/api/books');
    }
}