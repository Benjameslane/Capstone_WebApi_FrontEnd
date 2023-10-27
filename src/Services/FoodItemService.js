import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api';

const addFoodItem = async (foodItem, userToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fooditem`, foodItem, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding food item', error);
    throw error;
  }
};

export default addFoodItem;
