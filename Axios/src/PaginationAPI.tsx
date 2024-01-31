import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface Products {
  _id: string;
  images: string[];
  price: number;
  rating: number;
  price_before_discount: number;
  quantity: number;
  image: string;
}

const PaginationAPI = () => {
  const NUMBER_OF_PRODUCTS_PER_PAGE = 20;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Products[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-ecom.duthanhduoc.com/products?page=${page}&limit=${NUMBER_OF_PRODUCTS_PER_PAGE}`
        );

        setProducts(response.data.data.products);
        setTotalPage(response.data.data.pagination.page_size);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product._id} />
            <h3>{product.price}</h3>
          </div>
        )) ?? []}

        <Pagination
          count={totalPage} // Số lượng trang
          page={1} // Đang ở trang nào: mặc định là 1
          onChange={handlePageChange} // Mỗi lần sẽ thay đổi trang như thế nào
          variant="outlined" // Kiểu dáng của nút (outline, text, rounded)
          shape="rounded" // Kiểu dáng của nút (rounded, circle)
          showFirstButton // Hiển thị nút trang đầu tiên
          showLastButton // Hiển thị nút trang cuối cùng
        />
      </div>
      {/* Page 1: limit : 20 page : 1 page_size:  3 */}
      {/* Page 2: limit : 20 page : 2 page_size : 3 */}
      {/* Page 3: limit : 20 page : 3 page_size : 3 */}
    </>
  );
};

export default PaginationAPI;
