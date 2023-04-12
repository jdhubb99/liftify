import { Model, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser {
  email: string;
  password: string;
}

interface UserModel extends Model<IUser> {
  signUp(email: string, password: string): Promise<IUser>;
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
  const userExists = await this.findOne({ email });

  if (userExists) {
    throw new Error('User already exists');
  }

  // hashes the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user: IUser = await this.create({
    email,
    password: hashedPassword,
  });

  return user;
});

export const User = model<IUser, UserModel>('User', userSchema);
