import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(SWIGGY_API);
        const data = await res.json();
        console.log(data);
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (restaurants) {
          setListOfRestaurant(restaurants);
          setfilteredRestaurant(restaurants);
        }
      } catch (error) {
        console.log(error);
        // do something with error
      }
    };
    fetchData();
  }, []);

  const handleSearchInput = (e) => {
    setsearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestaurant(filteredRestaurant);
  };

  const handleTopRatedSearch = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.data.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  if (!onlineStatus) return <h1>Looks like you're offline</h1>;

  if (!listOfRestaurant.length) return <Shimmer />;

  return (
    <div className="Body">
      <div className="filter flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={handleSearchInput}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleTopRatedSearch}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
