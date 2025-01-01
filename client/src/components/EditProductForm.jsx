import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


function EditProductForm() {
  const [productData, setProductData] = useState({});

  const [producName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState ("");

  const params = useParams();

  const nevigate = useNavigate();
 
  useEffect(() => {
    getEditData();
    setProductName(productData.name);
    setProductPrice(productData.price);
    setProductImage(productData.image);
    setProductDescription(productData.description);
  },[params.id]);

  async function getEditData() {
    try{
      const result = await axios.get(`http://localhost:4001/products/${params.id}`);
      console.log(result);
      setProductData(result.data.data);
    } catch(error) {
      console.error("Error get product data :", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = {
        name: producName,
        price: productPrice,
        image: productImage,
        description: productDescription
      }
      const result = await axios.put(`http://localhost:4001/products/${params.id}`, data);
      console.log(result);
      nevigate("/");
    } catch(error) {
        console.error("Error edit product data :", error);
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder={productData.name}
            value={producName}
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
            placeholder={productData.image}
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
            placeholder={productData.price}
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
            placeholder={productData.description}
            value={productDescription}
            onChange={(event) => {setProductDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
      <div className="navToHome">
          <Link to="/"><button>Back to Home</button></Link>
      </div>
    </form>
  );
}

export default EditProductForm;
