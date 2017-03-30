import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  given_name: String,
  family_name: String,
  profile: String,
  picture: String,
  email: String,
  email_verified: Boolean,
  gender: String,
  logins: [Date],
});

export default mongoose.model('users', User);