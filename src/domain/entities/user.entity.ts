export interface IUser {
  name: string
  email: string
  password: string
  createdAt: number
}

export interface IUserID extends IUser{
  _id: string
}

export interface IUserLogin {
  email: string
  password: string
}

