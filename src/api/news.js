import axios from "axios";

const instance = axios.create({
  baseURL: "https://60371dc45435040017721a02.mockapi.io"
})

export const add = (post)=>{
  return instance.post(`/products`, post)
}
export const get = (id)=>{
  return instance.get(`/products/${id}`)
}
export const update = (post)=>{
  return instance.put(`/products/${post.id}`, post)
}
export const getAll = ()=>{
  return instance.get(`/products`)
}
export const remove = (id)=>{
  return instance.delete(`/products/${id}`)
}