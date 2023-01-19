import React from "react";

import "./Content.css";


export const Content = ({ name, city, country, imageUrl }) => (
    <>
        <img src={imageUrl} alt={name} />
        <p className="name">{name}</p>
        <p className="localization">
            {city}, {country}
        </p>
    </>
);
