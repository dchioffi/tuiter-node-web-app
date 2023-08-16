import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  liked: Boolean,
  likes: Number,
  disliked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number,
  tuit: String
}, { collection: 'tuits' });
export default schema;