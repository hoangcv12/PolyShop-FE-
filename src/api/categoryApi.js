import axiosClient from "./axiosClient"; 

export const getAll = () => {
    const url = `/categorys`;
    return axiosClient.get(url);
  };

  export const get = (id) => {
    const url = `/categorys/${id}`;
    return axiosClient.get(url);
  }
  export const getPage = (page) => {
    const url = `/categorys/page?page=${page}&&limit=10`;
    return axiosClient.get(url);
  };
  
