// index.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

console.log(process.env.AWS_ACCESS_KEY_ID)
console.log(process.env.AWS_SECRET_ACCESS_KEY)



app.use(express.json());

app.get('/api', (req, res) => {
  res.send(process.env.AWS_ACCESS_KEY_ID);
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
