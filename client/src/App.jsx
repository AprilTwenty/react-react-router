import "./App.css";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import EditProductForm from "./components/EditProductForm";
import CreateProductForm from "./components/CreateProductForm";
import HomePage from "./components/HomePage";
import ViewProduct from "./components/ViewProduct";

function App() {
  return <div className="App">{
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewproduct/:id/:name/:price/:description" element={<ViewProduct />} />
          <Route path="/editproduct/:id" element={<EditProductForm />} />
          <Route path="/createproduct" element={<CreateProductForm />} />

      </Routes>
    </BrowserRouter>
  }
  </div>;
}

export default App;
