import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId );
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    };

 
    return (
        <div className="menu">
            <h1>{resInfo}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>

        </div>

    )
}

export default RestaurantMenu;