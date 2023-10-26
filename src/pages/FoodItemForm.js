// components/FoodItemForm.js
import React, { useState } from 'react';
import { foodItemService } from '../Services/FoodItemService'

const FoodItemForm = () => {
  const [foodItem, setFoodItem] = useState({
    itemName: '',
    expirationDate: '',
    quantity: 1,
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem({ ...foodItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await foodItemService.addFoodItem(foodItem);
      alert('Food item added successfully!');
      
    } catch (error) {
      alert('Failed to add food item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="itemName" value={foodItem.itemName} onChange={handleChange} placeholder="Item Name" required />
      <input type="date" name="expirationDate" value={foodItem.expirationDate} onChange={handleChange} required />
      <input type="number" name="quantity" value={foodItem.quantity} onChange={handleChange} required />
      <input type="text" name="category" value={foodItem.category} onChange={handleChange} placeholder="Category" required />
      <button type="submit">Add Food Item</button>
    </form>
  );
};

export default FoodItemForm;
