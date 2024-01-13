import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () =>{

    const[btnName,setbtnName]=useState("Login");

    const onlineStatus=useOnlineStatus();

    //selector in reux
    const cartItems=useSelector((store)=>store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo">
                <img
                className='w-40'
                src="https://th.bing.com/th/id/OIP.ueHppfRf52CDn841Rpj8IwHaHa?pid=ImgDet&rs=1" 
                alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className="px-4">
                        online status: {onlineStatus ? "✔" :"🚨"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="contact">Help</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Cart">Cart</Link>
                    </li>         
                </ul>
            </div>
        </div>
    )
};

export default Header;