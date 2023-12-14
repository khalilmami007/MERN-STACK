import React, { useState } from "react";

const Personcard=(props) =>{
    const { fullname, Age, hairColor } = props;
    const [stateAge, setStateAge] = useState(Age);
    return(
        <div >
            <h1>{props.fullname}</h1>
            <p>Age: {stateAge} </p>
            <p>Hair color: {props.haircolor} </p>
            <button onClick={() => setStateAge(stateAge + 1)}>birthday button for : {props.fullname}</button>

        </div>
    )
}




export default Personcard;