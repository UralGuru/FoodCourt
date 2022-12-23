import axios from 'axios';

// const accessToken = localStorage.getItem('access-token');
// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpenphdHVsbGludUBnbWFpbC5jb21tdHRyIiwic3ViIjoiZjFmNjk3OWQtMGIwYy00YWI0LThlYWMtODU4NjQ2MjdlMTMxIiwicm9sZXMiOiJ1c2VyIiwiZXhwIjoxNjc0MDM0NTQwLCJpc3MiOiJGb29kY291cnRBcHAuQVBJIiwiYXVkIjoiRm9vZGNvdXJ0QXBwLkNsaWVudCJ9.9PO2xYOTGdOcCQoUXR0dbphY29vC97Qacw1H1FIwhLc'
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

const getBasket = async () => {
  const response = await instance.get('/basket');
  return response.data;
};

const cleanBasket = async () => {
  const response = await instance.delete('/basket');
  return response.data;
};

const changeCountProductInBasket = async (id: number, count:number) => {
  const response = await instance.patch(`/basket/${id}`,{
    count,
    variantId:1
  });
  return response.data;
};

const addProductToBasket = async (id: number) => {
  const response = await instance.put(`/basket`, {
    id, variantId: 1
  });
  return response.data;
};

const removeProductFromBasket = async (id: number) => {
  const response = await instance.delete(`/basket/${id}`);
  return response.data;
};

const BasketService = {
  getBasket,
  cleanBasket,
  changeCountProductInBasket,
  addProductToBasket,
  removeProductFromBasket
};

export default BasketService;
