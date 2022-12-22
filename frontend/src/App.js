import React from 'react'
import Pages from "./pages/Pages"
import Search from './components/Search'
import NavBar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";

function App() {
return (
  <div className='App'>
    <BrowserRouter>
      <NavBar />
      <Search />
      <Pages/>
    </BrowserRouter>
  </div> 
  );
}

export default App;