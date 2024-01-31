import PaginationAPI from "./PaginationAPI";
import "./style.scss";

function App() {
  // const [page, setPage] = useState(1);
  // const [page_size, setPageSize] = useState(0);
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  // };
  // const NUMBER_OF_PRODUCTS_PER_PAGE = 20;
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api-ecom.duthanhduoc.com/products?limit=${NUMBER_OF_PRODUCTS_PER_PAGE}&page=${page}`
  //       );
  //       setProducts(response.data.data.products);
  //       setPageSize(response.data.data.pagination.page_size);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [page]);

  return <PaginationAPI />;
}

export default App;
