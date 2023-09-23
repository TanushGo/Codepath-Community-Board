import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img className="Card-Image" src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.detail}</p>
        </div>
    )
}

export default Card;