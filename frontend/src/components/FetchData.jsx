import React, {useState,useCallback,useEffect} from 'react';
import Recipe from "./Recipe"
import { useParams } from 'react-router-dom';

function FetchData () {
    const[recipes,setRecipes] = useState([])
    let params = useParams();

    const fetchData = useCallback(()=>{
        const url = "http://localhost:3001/"
        fetch(url)
            .then((response)=>response.json())
            .then((incomingData) =>{
                setRecipes(incomingData)  
            })
            .catch((err)=>console.log(err))
      },[]);
    
      useEffect(()=>{
          fetchData();
          console.log("Fetched")
      },[FetchData]);

      const filtered = recipes.filter((recipe) => {
		return recipe.name.includes(params.name)
	})

    return(
        <>
            <Recipe data={filtered} />
        </>
    )

}

export default FetchData;