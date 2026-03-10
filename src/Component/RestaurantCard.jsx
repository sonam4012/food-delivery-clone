import "./RestaurantCard.css"
import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) =>{
    const { resdata} = props;
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src={CDN_URL} alt="res-logo"/>
            <h3>{resdata.card.card.info.name}</h3>
            <h4>{resdata.card.card.info.cuisines.join(",")}</h4>
            <h4>{resdata.card.card.info.avgRating} stars</h4>
            <h4> 34 min</h4>
            </div>
    )
}

export default RestaurantCard;