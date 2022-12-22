import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ShowRecipes from '../components/ShowRecipes';

function Searched() {
	const [recipes,setRecipes] = useState([])
	let params = useParams();

	const fetchData = useCallback(()=>{
		fetch("/all")
			.then((response)=>response.json())
			.then((incomingData) =>{
				setRecipes(incomingData)
			})
			.catch((err)=>console.log(err))
	  },[]);
	
	  useEffect(()=>{
		  fetchData();
	  },[fetchData]);

	
	const filtered = recipes.filter((recipe) => {
		return recipe.name.toLowerCase().includes(params.search)
	})

	return (
		<ShowRecipes data={filtered}/>
	);
}

export default Searched;