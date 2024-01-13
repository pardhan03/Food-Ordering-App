import { useState, useEffect} from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () =>{

    const [listofrestaurants,setListofRestaurant]=useState([0,1]);
    const [filteredRestaurant, setfilteredRestaurant]=useState([]);

    const [searchText, setsearchText]=useState();

    useEffect(()=>{
        fetchdata()
    },[]);

    const fetchdata = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false) 
    return( 
        <h1>
            Looks like you're offline
        </h1>
    );

    return listofrestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="Body">
            <div className="filter flex">
                <div className=" m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={()=>{
                            const filteredRestaurant=listofrestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        const filteredList=listofrestaurants.filter((res)=>res.data.avgRating>4);
                        setListofRestaurant(filteredList);
                    }}
                >
                    Top Rated estaurant
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
        </div>
    );
};

export default Body;