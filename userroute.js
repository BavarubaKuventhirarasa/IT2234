const express = require('express');
const router = express.Router();

const users = require('../userdb');
const posts = require('../postdb');
const comments = require('../commentdb');

// GET /users/:id/summary
router.get('/:id/summary', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const postCount = posts.filter(p => p.authorId === userId).length;
  const commentCount = comments.filter(c => c.userId === userId).length;

  res.json({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    postCount,
    commentCount
  });
});

module.exports = router;
