// services/foodItemService.js
import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api';

const addFoodItem = async (foodItem) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fooditem`, foodItem);
    return response.data;
  } catch (error) {
    console.error('Error adding food item', error);
    throw error;
  }
};

export const foodItemService = {
  addFoodItem,
};
