const express = require('express');
const bodyParser = require('body-parser');

const {http} = require('./config');
const getCommentsByAuthorName = require('./logic/getCommentsByAuthorName');
const getPosts = require('./logic/getPosts');
const changeTextInComment = require('./logic/changeTextInComment');
const uploadImage = require('./logic/uploadImage');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', getPosts);
app.get('/comments/:authorName', getCommentsByAuthorName);
app.put('/comment/:id', changeTextInComment);
app.post('/upload', uploadImage);

const port = process.env.HTTP_PORT || http.port || 3000;
app.listen(
  port,
  () => console.log(`HTTP server listening on ${port} port...`)
);
