import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { 
    type: Number,
    unique: true 
  },
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String
});

export default mongoose.model('User', userSchema);
