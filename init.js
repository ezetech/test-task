const PostModel = require('./models/post');

(async () => {
  const a = new PostModel({
    title: 'Post1',
    text: 'Text',
    authorName: 'Person1',
    comments: [
      {
        id: 0,
        authorName: 'Sparky',
        text: 'Lol!',
      },
      {
        id: 1,
        authorName: 'Ken',
        text: 'Lol!',
      },
      {
        id: 2,
        authorName: 'Sparky',
        text: 'Lol!',
      }]
  });
  await a.save();

  const b = new PostModel({
    title: 'Post2',
    text: 'Text',
    authorName: 'Person1',
    comments: [
      {
        id: 0,
        authorName: 'Ken',
        text: 'Lol!',
      },
      {
        id: 1,
        authorName: 'Ken',
        text: 'Lol!',
      }]
  });
  await b.save();
})();