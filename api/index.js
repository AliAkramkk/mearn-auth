import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database Connected")
}).catch((error) => {
  console.log(error.message)
})


const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


app.get('/', (req, res) => {
  res.json({
    message: 'API is working'
  })
})