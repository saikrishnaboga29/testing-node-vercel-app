// index.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('GET request received');
});

app.post('/post', (req, res) => {
  res.json({
    message: 'POST request received',
    data: req.body
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
