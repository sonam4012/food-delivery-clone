import './App.css';
import Header from "../src/Component/Header";
import Body from "../src/Component/Body";
import { Routes, Route } from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';


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
