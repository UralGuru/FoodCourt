import axios from 'axios';

// const accessToken = localStorage.getItem('access-token');
// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpenphdHVsbGludUBnbWFpbC5jb21tdHRyIiwic3ViIjoiZjFmNjk3OWQtMGIwYy00YWI0LThlYWMtODU4NjQ2MjdlMTMxIiwicm9sZXMiOiJ1c2VyIiwiZXhwIjoxNjc0MDM0NTQwLCJpc3MiOiJGb29kY291cnRBcHAuQVBJIiwiYXVkIjoiRm9vZGNvdXJ0QXBwLkNsaWVudCJ9.9PO2xYOTGdOcCQoUXR0dbphY29vC97Qacw1H1FIwhLc'
let accessToken = '';
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('access-token') ?? "gggg";
  console.log(accessToken)
}

const instance = axios.create({
  baseURL: 'http://food-court.tk/api/v1.0/',
  headers: { Authorization: `Bearer ${accessToken}` },
  params: {
    name: '',
    latitude: 53.56027514225735,
    longitude: 56.4671276578133,
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

const CafeService = {
  getCafes,
  getCafeItem
};

export default CafeService;
