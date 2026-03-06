import "./RestaurantCard.css"

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/11/28/b471b560-bf27-4005-b8d8-c6175df13fe7_74b7715b-76cc-4147-9ee0-c8a257d65033.png_compressed" alt="res-logo"/>
            <h3>Meghana Food</h3>
            <h4>Biryani,North Indian,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
            </div>
    )
}

export default RestaurantCard;