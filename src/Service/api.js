import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/anapaula-mello',
});

export default api;