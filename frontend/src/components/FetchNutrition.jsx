import React, { useEffect, useState, useCallback } from "react";

const FetchNutrition = ({ query }) => {
    const [nutrition, setNutrition] = useState({
      sugar_g: " ",
      fiber_g: " ",
      serving_size_g: " ",
      sodium_mg: " ",
      name: " ",
      potassium_mg: " ",
      fat_saturated_g: " ",
      fat_total_g: " ",
      calories: " ",
      cholesterol_mg: " ",
      protein_g: " ",
      carbohydrates_total_g: " ",
    });
  
    const fetchData = useCallback(() => {
      const url =
        "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
      console.log(url);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": 'f4fce20ddcmshb2738e21777f05ep1f7a52jsn9d12df236331',
          "X-RapidAPI-Host": 'calorieninjas.p.rapidapi.com',
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((incomingData) => {
          console.log(incomingData);
          if (incomingData.items.length !== 0) {
            setNutrition(incomingData.items[0]);
          }
        });
    }, [query]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData, query]);
  
    return (
      <div>
        <ul>
            <li>Serving size: {nutrition.serving_size_g} g</li>
            <li>Calories per serving: {nutrition.calories}</li>
            <li>Sugar content per serving {nutrition.sugar_g} g</li>
            <li>Total fat content per serving: {nutrition.fat_total_g} g</li>
            <li>Saturated fat content per serving: {nutrition.fat_saturated_g} g</li>
            <li>Protein content per serving: {nutrition.protein_g} g</li>
            <li>Total carbohydrates per serving: {nutrition.carbohydrates_total_g} g</li>
            <li>Fiber per serving: {nutrition.fiber_g} g</li>
            <li>Sodium per serving: {nutrition.sodium_mg} mg</li>
            <li>Potassium per serving: {nutrition.potassium_mg} mg</li>
            <li>Cholesterol per serving: {nutrition.cholesterol_mg} mg</li>
      </ul>
      </div>
    );
  };
  export default FetchNutrition;