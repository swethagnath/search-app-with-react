import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID H5-zkpr8tnhZLWEOgCKOe_lNIuVwVfFGPb41K9hUeBU'
  }
})