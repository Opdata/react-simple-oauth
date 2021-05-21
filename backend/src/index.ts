import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  'mongodb+srv://root:root@cluster0.c2z7m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected Mongoose Success');
  }
);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(4000, () => {
  console.log('Server Start');
});
