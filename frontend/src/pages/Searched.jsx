import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ShowRecipes from '../components/ShowRecipes';

function Searched() {
	const [recipes,setRecipes] = useState([])
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
	  },[fetchData]);

	
	console.log("Data: ",recipes)
	const filtered = recipes.filter((recipe) => {
		return recipe.name.toLowerCase().includes(params.search)
	})

	return (
		<ShowRecipes data={filtered}/>
	);
}

export default Searched;