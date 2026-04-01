// import { useEffect, useState } from "react";
// import "./Body.css"
// import RestaurantCard from "./RestaurantCard";
// import data from "../utils/mockData";


// const Body = () => {
//     const [datalist, setDataList] = useState(data);

//     useEffect(()=>{
//     fetchData();
//     }, []);

//     const fetchData = async () => {
//        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2665217&lng=87.023054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//        const json = await data.json();
//        console.log (json)

//     setDataList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
// };
      
// return(
// <div className="body">
//     <div className="search">
//         <button  className="filter-btn"
//          onClick={ () => {
//          const filterData = datalist.filter(
//         (res) => res.card.card.info.avgRating > 4
//     );
//     setDataList(filterData);
// }}
//  >
//         Top Rated Restaurants</button>
//     </div>
//     <div className="res-container">
//     {datalist.map((restaurant) => (
//         <RestaurantCard  key={restaurant.card.card.info.id} resdata = {restaurant}/>
//     ))}
        
//     </div>
//         </div>
//     )
// }
// export default Body;

import { useEffect, useState } from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
    const [datalist, setDataList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2665217&lng=87.023054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            let restaurants = null;
            for (let i = 0; i < json?.data?.cards?.length; i++) {
                const found = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (found) {
                    restaurants = found;
                    break;
                }
            }

            console.log("restaurants:", restaurants);
            setDataList(restaurants || []);
            setFilteredList(restaurants || []);
        } catch (err) {
            console.error("Failed to fetch:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    if (datalist.length === 0) return <h2 style={{ textAlign: "center" }}>No restaurants found</h2>;

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) => {
                setSearchText(e.target.value)

                }}
                />
                 <button onClick={() => {
                   const filterRestaurents = datalist.filter(
                    (res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   
                   );
                   setFilteredList(filterRestaurents);

                 }}>
                    Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterData = datalist.filter(
                            // ✅ Fixed path: res.info.avgRating
                            (res) => res?.info?.avgRating > 4
                        );
                        setFilteredList(filterData);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button
                    className="filter-btn"
                    onClick={() => setFilteredList(datalist)}
                >
                    Show All
                </button>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => {
                    // ✅ Fixed path: restaurant.info.id
                    if (!restaurant?.info?.id) return null;
                    return (
                       <Link key={restaurant.info.id}  to={"/restaurants/" + restaurant.info.id}> <RestaurantCard
                            resdata={restaurant}
            
                        />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;




