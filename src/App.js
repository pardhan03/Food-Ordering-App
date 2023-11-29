import React from "react";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/appstore.js";

const Applayout = () =>{
    return(
        <Provider store={AppStore}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    );
};

export default Applayout;