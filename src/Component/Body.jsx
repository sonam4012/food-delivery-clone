import { useState } from "react";
import "./Body.css"
import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData"

const Body = () => {
    const [datalist, setDataList] = useState(data);
        
    
return(
<div className="body">
    <div className="search">
        <button  className="filter-btn"
         onClick={ () => {
         const filterData = datalist.filter(
        (res) => res.card.card.info.avgRating > 4
    );
    setDataList(filterData);
}}
 >
        Top Rated Restaurants</button>
    </div>
    <div className="res-container">
    {datalist.map((restaurant) => (
        <RestaurantCard  key={restaurant.card.card.info.id} resdata = {restaurant}/>
    ))}
        
    </div>
        </div>
    )
}
export default Body;