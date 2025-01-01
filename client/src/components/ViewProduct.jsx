import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ViewProduct() {
    const params = useParams();
    return (
        <div className="app-wrapper">
            <div className="app-title">
                View Product Page
            </div>
            <div className="view-product-container">
                <h1>Name: {params.name}</h1>
                <h2>Price: {params.price}</h2>
                <p>Description: {params.description}</p>

            </div>
            <div className="navToHome">
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default ViewProduct;