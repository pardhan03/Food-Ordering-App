import { useState } from "react";

const User = (props) =>{

    const[count]=useState(0);
    const[conunt2]=useState(1);


    return(
        <div className="user-card">
            <h1>count={count}</h1>
            <h2>count2={conunt2} </h2>
            <h1>Name:{props.name}</h1>
            <h3>Location:Dehradun</h3>
            <h4>Contact:7056373478</h4>
        </div>
    )
};

export default User;