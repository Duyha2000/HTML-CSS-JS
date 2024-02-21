import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PaginationAPI from "./PaginationAPI";
import PaginationDetail from "./PaginationDetail";
import Profile from "./Profile";
import "./style.scss";
import ProductPage from "./ProductPage";
import ProductPageDetail from "./ProductPageDetail";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/", // Đường dẫn
    element: <div>A</div>,
  },

  {
    path: "/pagination",
    element: <PaginationAPI />,
  },
  {
    path: "/pagination/:id",
    element: <PaginationDetail />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/:id",
    element: <ProductPageDetail />,
  },

  {
    path: "user/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
