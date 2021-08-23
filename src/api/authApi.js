import axiosClient from './axiosClient'


export const signin = (user) => {
    const url = `jwt/authenticate`;
    return axiosClient.post(url, user);
};

