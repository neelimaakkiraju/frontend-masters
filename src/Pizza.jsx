import React from "react";

const Pizza = (props)=>{
    return(
        <div>
            
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Pizza;