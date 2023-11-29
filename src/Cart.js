import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/Cartslice";

const Cart = () =>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearcart=()=>{
        dispatch(clearCart);
    }
    return(
        <div>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearcart}>
                        Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;