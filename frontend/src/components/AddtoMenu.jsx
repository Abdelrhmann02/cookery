import React from 'react'
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import { useState,useEffect } from 'react';

function AddtoMenu() {
    const [menu, setMenu] = useState([]);
    const addToMenu = (e,selectedItem) => {
        let newMenu;
        if (menu.includes(selectedItem)) {
          // If the item is already in the array, remove it
          newMenu = menu.filter(item => item !== selectedItem);
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