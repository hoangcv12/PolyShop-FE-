import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = `/products`;
  return axiosClient.get(url);
};

export const getPage = (page) => {
  const url = `/products/page?page=${page}&limit=10`;
  return axiosClient.get(url);
};
export const add = (product) =>{
  const url = `/products/add`;
  return axiosClient.post(url,product);
}

export const remove = (id) =>{
  const url = `/products/${id}`;
  return axiosClient.delete(url);
}

export const getId = (id) =>{
  const url = `/products/${id}`;
  return axiosClient.get(url);
}

export const update = (product) =>{
  const url = `/products/update`;
  return axiosClient.put(url,product);
}