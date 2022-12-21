import React, {useState,useCallback,useEffect} from 'react'
import {Carousel,Card,Row,Col,Button} from 'react-bootstrap';
import {FcAlarmClock} from 'react-icons/fc';
import {RiHeart3Fill} from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.scss"
import { Link } from 'react-router-dom';

const Dinner = ({menu,addToMenu}) => {
  const[recipes,setRecipes] = useState([])
  const [iconStates, setIconStates] = useState({});
  
  const fetchData = useCallback(()=>{
    const url = "http://localhost:3001/Dinner"
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

  const reduceRecipes = (acc, cur, index) => {
  const groupIndex = Math.floor(index / 3);
  if (!acc[groupIndex]) acc[groupIndex] = [];
  acc[groupIndex].push(cur);
  return acc;
  };


return (
    <div>
      <div className='wrapper_dinner'>
      <h3>Dinner Recipes</h3>
      <br/>
      <Carousel indicators="false" interval="5000">
        {recipes.reduce(reduceRecipes, []).map((item, index) => (
          <Carousel.Item key={item._id}>
          <div className="d-flex justify-content-center">
            <Row>
            {item.map((item, index) => {
              return (
                <Col sm>
                <Card key={item._id} style={{ width: "18rem" }}>
                <Link to={'/recipe/'+ item.name}>
                  <Card.Img variant="top" src={item.photo_location} />
                </Link>
                  <Card.Body>
                  <div className="title-container">
                    <Card.Title>
                    {item.name} 
                    <RiHeart3Fill
                    key={item._id}
                    className={
                      iconStates[item._id] ? 'heart active' : 'heart'
                    }
                    onClick={(e) => {
                      addToMenu(e,item)
                        setIconStates({...iconStates, [item._id]: !iconStates[item._id]})
                    }}
                  />
                    </Card.Title>
                    <p><FcAlarmClock/> {item.prep_time + item.cook_time} minutes</p>
                    
                  </div>
                  </Card.Body>
                
                </Card>
                </Col>
              );
            })}
            </Row>
           </div>
          </Carousel.Item>
        ))}
        </Carousel>
        </div>
    </div>
  )
}

export default Dinner;

        
