const express = require('express');
const app = express();

const postRoutes = require('./routes/posts');

const userRoutes = require('./routes/users');

app.use('/userdb',userRoutes);
app.use('/postdb',postRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`sever running on port ${PORT}`);
});