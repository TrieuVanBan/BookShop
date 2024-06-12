import { IUser } from "../types/user"
import instance from "./axiosConfig"

export const getUsers = () => {
  return instance.get('/users')
}

export const addUser = (data: IUser) => {
  return instance.post('/users', data)
}