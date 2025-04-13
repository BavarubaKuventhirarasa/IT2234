const express = require('express');
const router = express.Router();

const posts = require('../postdb');
const comments = require('../commentdb');
const users = require('../userdb');

// GET /posts/:id/comments
router.get('/:id/comments', (req, res) => {
  const postId = req.params.id;
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const postComments = comments
    .filter(comment => comment.postId === postId)
    .map(comment => {
      const user = users.find(u => u.id === comment.userId);
      return {
        comment: comment.content,
        commentator: user ? `${user.firstName} ${user.lastName}` : 'Unknown'
      };
    });

  res.json(postComments);
});

module.exports = router;
