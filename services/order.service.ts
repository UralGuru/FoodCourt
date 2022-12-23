import axios from 'axios';

let accessToken = '';
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('access-token') ?? "gggg";
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

const createOrder = async () => {
  const response = await instance.post('/orders');
  return response.data;
};

const gerOrders = async () => {
  const response = await instance.get('/orders');
  return response.data;
};


const gerItemOrder = async (id: number) => {
  const response = await instance.get(`/basket/${id}`);
  return response.data;
};

const OrderService = {
  createOrder,
  gerOrders,
  gerItemOrder,
};

export default OrderService;
