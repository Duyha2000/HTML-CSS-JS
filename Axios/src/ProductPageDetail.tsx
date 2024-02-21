import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface IProduct {
  image: string;
  name: string;
  price: number;
}
const ProductPageDetail = () => {
  // Link - NavLink
  // useNavigate
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState<IProduct>({
    image: "",
    name: "",
    price: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-ecom.duthanhduoc.com/products/${id}`
        );
        setProduct(response.data.data);
        console.log(response.data.data, "aaaaa");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Quay lại sản phẩm
      </button>
      <div>
        <img src={product.image} alt="" />
        <p>{product?.name}</p>
        <p>{product?.price}</p>
      </div>
    </div>
  );
};

export default ProductPageDetail;
