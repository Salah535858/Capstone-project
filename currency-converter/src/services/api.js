import axios from 'axios';

const API_BASE_URL = 'https://v6.exchangerate-api.com/v6/4ed58613065f17d16f2c6a71/latest';

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${baseCurrency}`);
    return response.data;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Failed to fetch exchange rates');
  }
};
