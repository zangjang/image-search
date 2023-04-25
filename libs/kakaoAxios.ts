import axios from 'axios';

const instance = axios.create({ baseURL: 'https://dapi.kakao.com' });

instance.defaults.headers.common['Authorization'] = 'KakaoAK 8c507d9c4486cff701ddb2bd307fa0c0';

export default instance;
