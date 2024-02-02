import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001',
});

export const get = (url: string, params: any) => instance.get(url, {params});

export const post = (url: string, data: any) => instance.post(url, data);
