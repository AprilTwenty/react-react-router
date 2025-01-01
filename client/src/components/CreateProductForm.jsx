import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const nevigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data ={
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription
    }
    const result = await axios.post("http://localhost:4001/products", data);
    nevigate("/");
    console.log(result);
  }
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
            onChange={(event) => {setProductName(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={productImage}
            onChange={(event) => {setProductImage(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productPrice}
            onChange={(event) => {setProductPrice(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={productDescription}
            onChange={(event) => {setProductDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
      <div className="navToHome">
          <Link to="/"><button>Back to Home</button></Link>
      </div>
    </form>
  );
}

export default CreateProductForm;
