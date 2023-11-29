import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { NEW_API } from "./utils/constant";
import { useState, useEffect } from "react";
import RestaurantCategory from "./RestaurantCategory";
/**const RestaurantMenu = () =>{
    const[resinfo, setresinfo]=useState(null); 
    const {resid}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=264693&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setresinfo(json?.data);
    }
    if(resinfo===null) 
        return <Shimmer/>
    const items=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(items); 
    return(
        <div>
            <ul>
                <li>restaurant</li>
                <li>Menu</li> 
                <li>{items[0]?.card?.info?.name}</li>
            </ul>
        </div>
    )
};*/
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const [showIndex,setshowIndex]=useState(0);
  
    const { resId } = useParams();
    console.log(resId);
  
    useEffect(() => {
      fetchMenu();
    },[]);
  
    const fetchMenu = async () => {
      const data = await fetch(NEW_API+resId);
      const json = await data.json();
      setResInfo(json.data);
      //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };
  
    if (resInfo === null) return <Shimmer />;

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>
      c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    //console.log(categories);
    //const { name, cuisines, costForTwoMessage } =
      //resInfo?.cards[0]?.card?.card?.info;
    //const { itemCards } =resInfo?.cards[2]?.grouepdCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
    return (
      <div className="text-center">
        <h2 className="font-bold my-6 text-2xl">Menu</h2>
        {categories.map((Category,index)=>
        //controlled component
        <RestaurantCategory data={Category?.card?.card}
        showItems={index===showIndex ? true : false}
        setshowIndex={() =>setshowIndex(index)}/>)}
      </div>
    );
  };

export default RestaurantMenu;