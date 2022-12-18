import React, {useState,useCallback,useEffect} from 'react'
import {Carousel,Card,Row,Col} from 'react-bootstrap';
import {FcAlarmClock} from 'react-icons/fc';
import {RiHeart3Fill} from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.scss"

function Dinner() {
  const[recipes,setRecipes] = useState([])
  const [menu, setMenu] = useState([]);
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
  console.log(acc);
  return acc;
  };


return (
    <div>
      <div className='wrapper_dinner'>
      <h3>Dinner Recipes</h3>
      <br/>
      <Carousel indicators="false" interval="5000">
        {recipes.reduce(reduceRecipes, []).map((item, index) => (
          <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <Row>
            {item.map((item, index) => {
              return (
                <Col sm>
                <Card key={item._id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.photo_location} />
                  <Card.Body>
                  <div className="title-container">
                    <Card.Title>
                    {item.name} 
                    <RiHeart3Fill
                    className={
                      iconStates[item._id] ? 'heart active' : 'heart'
                    }
                    onClick={() => {
                        if (menu.includes(item)) {
                          setMenu(menu.filter(menuItem => menuItem._id !== item._id));
                        } else {
                          setMenu(menu.concat(item));
                        }
                        localStorage.setItem('menu', JSON.stringify(menu));
                        setIconStates({...iconStates, [item._id]: !iconStates[item._id]})
                    }}
                  />
                    </Card.Title>
                    <p><FcAlarmClock/> {item.prep_time + item.cook_time} minutes     </p>
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

        
