import React from 'react';
import "./cards.scss";
import { NavLink } from "react-router-dom";

export default function Cards({ data }) {
    return (
        <div className="box">
            <NavLink to={`/product/${data.id}`}>
                <div className="card">
                    <img src={data.img} alt={data.brand} />
                    <h5 className="subtitle">{data.collection}</h5>
                    <h3 className="title">{data.brand}</h3>
                    <p className="priceCard">{data.price}</p>
                </div>
            </NavLink>
        </div>
    );
}
