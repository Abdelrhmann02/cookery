import React, {useState} from 'react';
import styled from "styled-components";
import { Row,Col } from 'react-bootstrap';
import FetchNutrition from "./FetchNutrition"
import { useLocalStorage } from './useLocalStorage';

const Recipe = ({data}) => {



  const [activeTab, setActiveTab] = useState("instructions");
  return (
    <div>
      {data.map((item)=>{
        return(
      <>
        <Title>
          <h2>{item.name}</h2>
        </Title>
        <DetailWrapper>
        <div className="imageWrapper">
        <img src={item.photo_location} alt="" />
        </div>
        <Info>
        <Row>
        <Col >
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        </Col>
        <Col >
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        </Col>
        <Col >
        <Button
          className={activeTab === "nutrition" ? "active" : ""}
          onClick={() => setActiveTab("nutrition")}
        >
          Nutritional
        </Button>
        </Col>
        </Row>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
              <ol>
              {item.steps.map((step) => {
                return <li key={item._id}>{step}</li>;
              })}
            </ol>
          </div>
        )}
        {activeTab === "ingredients" && (
          <>
            <ul>
              {item.ingredients.map((ingredient) => {
                return <li key={item._id}>{ingredient}</li>;
              })}
            </ul>
            <Button>Add to Shopping Cart</Button>
          </>
        )}
        {activeTab === "nutrition" && ( 
          <FetchNutrition query={item.name} />
        )}
      </Info>
      </DetailWrapper>
      </>
        )
      })}
      
    </div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  color: var(--gray-800);
  .active {
    background: var(--gray-900);
    color: var(--gray-50);
  }
  p {
    color: var(--gray-800);
    line-height: 1.25rem;
  }
  h2 {
    text-align: center;
  }
  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }
  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;
    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }
  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }
  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }
  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }
  @media (max-width: 865px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    .imageWrapper {
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
      justifycontent: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  width: 60%;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: var(--gray-800);
    color: var(--gray-50);
  }
  &:active {
    background: #ff9800;
    color: var(--gray-50);
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  width: 700px;
  max-width: 100%;
  ul {
    margin-top: 0;
  }
  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;

const Title = styled.div`
  h2{
    text-align: center;
    margin-top: 3rem;
  }
`



export default Recipe;