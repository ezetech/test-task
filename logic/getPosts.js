const PostModel = require('./../models/post');

module.exports = (request, response) => {
  PostModel.find({})
    .then((data => response.status(200).json(data)))
    .catch(err => response.status(500).json(err));
};
