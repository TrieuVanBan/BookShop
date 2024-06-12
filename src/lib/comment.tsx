import { IComment } from "../types/comment"
import instance from "./axiosConfig"

export const getComments = () => {
  return instance.get('/comments')
}

export const addComment = (data: IComment) => {
  return instance.post('/comments', data)
}