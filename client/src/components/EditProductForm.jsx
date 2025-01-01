import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


function EditProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const params = useParams();

  const navigate = useNavigate();
 
  useEffect(() => {
    getEditData();

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
        name: productData.name,
        price: productData.price,
        image: productData.image,
        description: productData.description
      }
      const result = await axios.put(`http://localhost:4001/products/${params.id}`, data);
      console.log(result);
      navigate("/");
    } catch(error) {
        console.error("Error edit product data :", error);
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setProductData({
      ...productData,
      [name]: value
    }
    )
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
            value={productData.name}
            onChange={handleChange}
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
            value={productData.image}
            onChange={handleChange}
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
            value={productData.price}
            onChange={handleChange}
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
            value={productData.description}
            onChange={handleChange}
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
