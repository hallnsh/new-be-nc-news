const db = require('../db/connection');

exports.fetchTopics = () => {
    return db
    .query('SELECT * FROM topics;')
    .then (({rows}) => {
        console.log('Inside fetchTopics');
        return rows;
    });
};