import axios from 'axios';

let accessToken = '';
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('access-token') ?? "gggg";
}

const instance = axios.create({
  baseURL: 'http://food-court.tk/api/v1.0/',
  headers: { Authorization: `Bearer ${accessToken}` },
});

const getProfile = async () => {
  const response = await instance.get('/profile');
  return response.data;
};


const ProfileService = {
  getProfile,
};

export default ProfileService;
