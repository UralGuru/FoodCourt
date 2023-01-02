import axios from 'axios';
import {createCafeBek} from "@constants/types";

let accessToken = '';
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('access-token') ?? "";
}

const instance = axios.create({
  baseURL: 'http://food-court.tk/api/v1.0/',
  headers: { Authorization: `Bearer ${accessToken}` },
  params: {
    name: '',
    latitude: 56.83791589668633,
    longitude: 60.66038399431736,
    skip: 0,
    take: 10,
  },
});

const getCafes = async () => {
  const response = await instance.get('/cafes');
  return response.data;
};

const getCafeItem = async (id: number) => {
  const response = await instance.get(`/cafes/${id}/products`);
  return response.data;
};

const createCafeItem = async (data: createCafeBek) => {
  const response = await instance.post('/cafes', data);
  if(response.status == 201) {
    alert(response.data)
  }
};

const CafeService = {
  getCafes,
  getCafeItem,
  createCafeItem

};

export default CafeService;
