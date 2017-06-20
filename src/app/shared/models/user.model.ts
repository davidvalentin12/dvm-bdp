import {IScapholdUser} from '../services/auth.service';

export class User implements IScapholdUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
  createdAt: Date;
  modifiedAt: Date;
  lastLogin: Date;

  constructor() {

  }

}
