import './App.css';
import Header from "../src/Component/Header";
import Body from "../src/Component/Body";
import { Routes, Route } from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';
import { render } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
      </Routes>
      
    </div>
  );
}

export default App;



//  first consturctor is Called 
//  2nd render
// dom render
//  3rd componetdid mount
//api call
//set the render
// dom update
//coponent did update
