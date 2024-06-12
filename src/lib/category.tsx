import instance from "./axiosConfig"

export const getCategories = () => {
  return instance.get('/categories')
}

// export const readProduct = (id: any) => {
//   return instance.get(`/categories/${id}`)
// }