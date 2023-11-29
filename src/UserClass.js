import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
        };
    }

    render(){
        return(
            <div>
                <h1>Name:{this.props.name}</h1>
                <h3>Location:Yamuna nagar</h3>
                <h4>Contact:7056373478</h4>
            </div>
        );
    }
}


export default UserClass;