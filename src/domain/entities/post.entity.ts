export interface IPost {
  id_: number | string  
  title: string
  content: string
  createAt: Date
  user: number
}


export interface IPostMock {
  _id?: number | string  
  title: string
  content: string
  createAt: Date
  user: string
}


