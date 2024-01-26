import React, {
  CSSProperties,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = React.lazy(() => import("../pages/About"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
// const RegisterFormik = React.lazy(() => import("../pages/RegisterFormik"));
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Form = React.lazy(() => import("../pages/Form"));

// callAPI, tương tác với phần tử DOM, setTimeOut, setInterval, ...
const App: React.FC = () => {
  // // useState
  // useEffect(() => {
  //   // code here
  //   // TH1: không có dependency array => chạy mỗi lần render
  //   // TH2: dependency array rỗng => chạy 1 lần duy nhất: call API
  //   // TH3: dependency array có giá trị => chạy khi giá trị thay đổi: thường làm phân trang
  // }, []);
  // // useState
  // const [count, setCount] = useState<number>(0);
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrease = () => {
  //   setCount(count - 1);
  // };
  // // const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  // // const handleDropdown = () => {
  // //   setIsShowDropdown(!isShowDropdown);
  // // };
  // // get - post - put - delete
  // // const [todos, setTodos] = useState<[]>([]);

  // // useEffect(() => {
  // //   const loadPosts = async () => {
  // //     const response = await axios.get(
  // //       `https://jsonplaceholder.typicode.com/todos`
  // //     );
  // //     console.log(response.data, "aaaa");
  // //     setTodos(response.data);
  // //   };
  // //   loadPosts();
  // // }, []);
  // // https://jsonplaceholder.typicode.com/posts
  // const [posts, setPosts] = useState<[]>([]);
  // // GET - POST - PUT - DELETE
  // // GET: lấy dữ liệu về (hiển thị dữ liệu)
  // // POST: tạo mới dữ liệu
  // // PUT: cập nhật dữ liệu
  // // DELETE: xóa dữ liệu
  // // setTodos(lỗi dữ liệu về)
  // useEffect(() => {
  //   const loadPosts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts`
  //       );
  //       console.log(response.data, "AAA");
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loadPosts();
  // }, []);

  // Tương tác với DOM
  // useEffect(() => {
  //   const item = document.querySelector(".item") as HTMLElement;
  //   if (item) item.style.color = "red";
  // }, []);
  // window.location.href = "https://google.com";

  interface SuspenseLayoutProps {
    children: ReactNode;
  }

  const ProgressBar = () => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Simulate progress increment
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : 100
        );
      }, 50);

      return () => clearInterval(interval);
    }, []);

    // Use CSSProperties type for the style object
    const style: CSSProperties = {
      width: `${progress}%`,
      height: "5px",
      backgroundColor: "red",
      position: "fixed",
      top: 0,
      left: 0,
      transition: "all 0.5s linear",
    };

    return <div style={style}></div>;
  };

  const SuspenseLayout: React.FC<SuspenseLayoutProps> = ({ children }) => {
    return <Suspense fallback={<ProgressBar />}>{children}</Suspense>;
  };

  const router = createBrowserRouter([
    {
      path: "/", // Đường dẫn
      element: (
        <SuspenseLayout>
          <HomePage />
        </SuspenseLayout>
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <About />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
    {
      path: "/form",
      element: <Form />,
    },

    // {
    //   path: "/register-formik",
    //   element: <RegisterFormik />,
    // },
  ]);

  return (
    // <div>
    //   <div className="item">Xin chao</div>
    //   {posts.map(({ id, title }: { id: number; title: string }) => (
    //     <div key={id}>{title}</div>
    //   )) ?? []}
    //   <button onClick={handleDecrease}>-</button>
    //   {/* {todos.map(({ id, title }: { id: number; title: string }) => (
    //     <div key={id}>{title}</div>
    //   ))} */}
    //   <span>{count}</span>
    //   <button onClick={handleIncrease}>+</button>
    //   {/* <button onClick={handleDropdown}>Show dropdown!!!!</button>
    //   {isShowDropdown && (
    //     <ul>
    //       <li>Xin chao</li>
    //       <li>Xin chao</li>
    //       <li>Xin chao</li>
    //     </ul>
    //   )} */}
    // </div>
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
