import React from "react";

const personcard=(props) =>{
    return(
        <div >
            <h1>{props.fullname}</h1>
            <p>Age: {props.age} </p>
            <p>Hair color: {props.haircolor} </p>

        </div>
    )
}




export default personcard;