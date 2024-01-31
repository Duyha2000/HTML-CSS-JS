import { Pagination } from "@mui/material";
import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

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
  const [search, setSearch] = useState("");
  const NUMBER_OF_PRODUCTS_PER_PAGE = 20;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Products[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [sort, setSort] = useState("view");
  const [order, setOrder] = useState("desc");
  const inputRef = useRef<HTMLInputElement>(null);
  // setOrderby:
  // 1. Giá: Cao đến thấp
  // 2. Giá: Thấp đến cao

  // https://api-ecom.duthanhduoc.com/products?page=1&limit=20&name=%C3%81o

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-ecom.duthanhduoc.com/products?page=${page}&limit=${NUMBER_OF_PRODUCTS_PER_PAGE}&sort_by=${sort}&name=${search}&order=${order}`
        );

        setProducts(response.data.data.products);
        setTotalPage(response.data.data.pagination.page_size);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, sort, order, search]);
  // useRef: Lưu trữ giá trị của biến sau mỗi lần render
  const handleSearchChange = () => {
    setSearch(inputRef.current?.value ?? "");
  };

  //  Pagination
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handlePopularChange = () => {
    setSort("view");
  };
  const handleNewestChange = () => {
    setSort("createdAt");
  };
  const handleBestSellerChange = () => {
    setSort("sold");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // debounce
    debounce(() => {
      setSearch(event.target.value);
    }, 1000)();
  };
  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
    setSort("price");
  };

  return (
    <>
      <div className="button-container">
        <div>
          <input
            type="text"
            placeholder="Search input here..."
            ref={inputRef}
          />
          <button onClick={handleSearchChange}>Search</button>
        </div>
        <input
          type="text"
          placeholder="Search product..."
          name="search"
          onChange={handleInputChange}
        />
        <select
          name="order_by"
          id="order_by"
          value={order}
          onChange={handleOrderChange}
        >
          <option value="desc">Giá: Cao đến thấp</option>
          setSort( )<option value="asc">Giá: Thấp đến cao</option>
        </select>

        <button onClick={handlePopularChange}>Phổ biến</button>
        <button onClick={handleNewestChange}>Mới nhất</button>
        <button onClick={handleBestSellerChange}>Bán chạy</button>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product._id} />
            <h3>{product.price}</h3>
          </div>
        )) ?? []}

        <Pagination
          count={totalPage} // Số lượng trang
          page={page} // Đang ở trang nào: mặc định là 1
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
