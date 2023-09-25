import ky from 'ky';

const httpService = ky.create({prefixUrl: import.meta.env.VITE_API_URL});

export default  httpService;
