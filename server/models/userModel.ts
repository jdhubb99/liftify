import { Model, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

interface IUser {
  _id?: string;
  email: string;
  password: string;
}

interface UserModel extends Model<IUser> {
  signUp(email: string, password: string): Promise<IUser>;
  login(email: string, password: string): Promise<IUser>;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static Sign Up Method
userSchema.static('signUp', async function (email: string, password: string) {
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }

  const userExists = await this.findOne({ email });

  // checks if the user already exists
  if (userExists) {
    throw new Error('User already exists');
  }

  // hashes the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // creates a new user in the database
  const user: IUser = await this.create({
    email,
    password: hashedPassword,
  });

  return user;
});

// Static Login Method
userSchema.static('login', async function (email: string, password: string) {
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  const user = await this.findOne({ email });

  // checks if the user exists
  if (!user) {
    throw new Error('User does not exist');
  }

  // checks if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Password is incorrect');
  }

  return user;
});

export const User = model<IUser, UserModel>('User', userSchema);
