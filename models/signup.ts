import { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
  },
  { timestamps: true }
);
const User = models.User || model<IUser>('User', UserSchema);

export default User;
