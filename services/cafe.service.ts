import axios from 'axios';
import { useSelector } from 'react-redux';

// const user = useSelector((state: any) => state.auth);

const at = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpenphdHVsbGludUBnbWFpbC5jb21teXlvb29vd3IiLCJzdWIiOiIwYzgyNzg0My0wMmY0LTRmYjAtOGU2ZS1lNzhjZDQyZmUzN2IiLCJyb2xlcyI6InVzZXIiLCJleHAiOjE2NzM0MjQ2NTAsImlzcyI6IkZvb2Rjb3VydEFwcC5BUEkiLCJhdWQiOiJGb29kY291cnRBcHAuQ2xpZW50In0.l3XtneOK77b0Ct282z6T0B7_w91GRk2L8b-SYW_Thzk'

const instance = axios.create({
  baseURL: 'http://food-court.tk/api/v1.0/',
  headers: {'Authorization': `Bearer ${at}`},
  params: {
    name: '',
    latitude: 53.56027514225735,
    longitude: 56.4671276578133,
    skip: 0,
    take: 10
  }
});

const getCafes = async () => {
  const response = await instance.get(  '/cafes');
  return response.data;
};

const CafeService = {
  getCafes,
};

export default CafeService;
