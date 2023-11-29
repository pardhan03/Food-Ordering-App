import ItemList from "./itemList";

    const RestaurantCategory= ({data,showItems,  setshowIndex}) =>{
    //console.log(data);
    const handleclick =() =>{
        setshowIndex();
    };
    return(
        <div >
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div 
                    className="flex justify-between cursor-pointer"
                    onClick={handleclick}>
                <span className="font-bold text-lg ">{data.title}</span>
                <span>🧷</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;