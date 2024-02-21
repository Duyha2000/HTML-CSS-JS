import axios from "axios";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./style.scss";
interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const PaginationDetail: React.FC = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>(searchParams.get("name"));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ query: query || "" });
    e.currentTarget.reset();
  };
  const [detailProduct, setDetailProduct] = useState<Product>({
    name: "",
    image: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    const fetchDetailProduct = async () => {
      try {
        const response = await axios.get(
          `https://api-ecom.duthanhduoc.com/products/${id}`
        );
        console.log(response.data.data);
        setDetailProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailProduct();
  }, [id]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>{detailProduct?.name}</h1>
        <img src={detailProduct?.image} alt="" />
        <p>{detailProduct?.price}</p>
        <p
          dangerouslySetInnerHTML={{ __html: detailProduct?.description || "" }}
        />
      </div>
    </div>
  );
};

export default PaginationDetail;
