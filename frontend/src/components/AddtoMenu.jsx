import React from 'react'
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import { useState,useEffect } from 'react';

function AddtoMenu() {
    const initialMenu = JSON.parse(localStorage.getItem('menu')) || [];
    const [menu, setMenu] = useState(initialMenu);
    
    const addToMenu = (e,selectedItem) => {
        let newMenu;
        if (menu.some(item => item._id === selectedItem._id))  {
          // If the item is already in the array, remove it
          newMenu = menu.filter(item => item._id !== selectedItem._id);
        } else {
          // If the item is not in the array, add it
          newMenu = [...menu, selectedItem];
        }
        setMenu(newMenu);
    }

    useEffect(() => {
        localStorage.setItem('menu', JSON.stringify(menu));
      }, [menu]);
    
  return (
    <div>
        <Breakfast {...{ menu, addToMenu }} />
        <Dinner {...{ menu, addToMenu }} />
    </div>
  )
}

export default AddtoMenu;