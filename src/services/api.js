import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.github.com/', // Substitua pela URL base da sua API
  });