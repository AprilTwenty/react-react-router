import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function HomePage() {
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect((productsInfo) => {
        getProductData();
    },[]);

    async function getProductData() {
        const result = await axios.get("http://localhost:4001/products");
        console.log(result);
        setProductsInfo(result.data.data);
    }
    
    async function handleDelete(id) {
        try {
        const result = await axios.delete("http://localhost:4001/products/" + id)
        console.log(result);
        getProductData();
        } catch(error) {
            console.error("Error deleting product:", error);
        }
    }

    return (

        <div className="app-wrapper">
            <div className="app-title" >
                products
                <Link to="/createproduct" >
                    <button>Create Product</button>
                </Link>
            </div>
            <div className="product-list">
                {
                    productsInfo.map((item, index) => (
                        <div key={item.id} className="product">
                            <div className="product-preview">
                                <img
                                    src={item.image}                   
                                    width="350"
                                    height="350">
                                </img>
                            </div>
                            <div className="product-detail">
                                <h1>Product name: {item.name}</h1>
                                <h2>Produc price: {item.price}</h2>
                                <p>Product description: {item.description}</p>
                                <div className="product-actions">
                                    <Link to={"/viewproduct/" + item.id + "/" + item.name + "/" + item.price + "/" + item.description} ><button className="view-button">View</button></Link>
                                    <Link to={`/editproduct/${item.id}`}><button  className="edit-button">Edit</button></Link>
                                </div>
                            </div>
                            <button className="delete-button" onClick={() => {handleDelete(item.id)}}>x</button>
                        </div>                            
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;