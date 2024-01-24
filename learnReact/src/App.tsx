import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/style.scss";
// callAPI, tương tác với phần tử DOM, setTimeOut, setInterval, ...
const App: React.FC = () => {
  // useState
  useEffect(() => {
    // code here
    // TH1: không có dependency array => chạy mỗi lần render
    // TH2: dependency array rỗng => chạy 1 lần duy nhất: call API
    // TH3: dependency array có giá trị => chạy khi giá trị thay đổi: thường làm phân trang
  }, []);
  // useState
  const [count, setCount] = useState<number>(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  // const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  // const handleDropdown = () => {
  //   setIsShowDropdown(!isShowDropdown);
  // };
  // get - post - put - delete
  // const [todos, setTodos] = useState<[]>([]);

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/todos`
  //     );
  //     console.log(response.data, "aaaa");
  //     setTodos(response.data);
  //   };
  //   loadPosts();
  // }, []);
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState<[]>([]);
  // GET - POST - PUT - DELETE
  // GET: lấy dữ liệu về (hiển thị dữ liệu)
  // POST: tạo mới dữ liệu
  // PUT: cập nhật dữ liệu
  // DELETE: xóa dữ liệu
  // setTodos(lỗi dữ liệu về)
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        console.log(response.data, "AAA");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPosts();
  }, []);

  // Tương tác với DOM
  // useEffect(() => {
  //   const item = document.querySelector(".item") as HTMLElement;
  //   if (item) item.style.color = "red";
  // }, []);

  return (
    <div>
      <div className="item">Xin chao</div>
      {posts.map(({ id, title }: { id: number; title: string }) => (
        <div key={id}>{title}</div>
      )) ?? []}
      <button onClick={handleDecrease}>-</button>
      {/* {todos.map(({ id, title }: { id: number; title: string }) => (
        <div key={id}>{title}</div>
      ))} */}
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      {/* <button onClick={handleDropdown}>Show dropdown!!!!</button>
      {isShowDropdown && (
        <ul>
          <li>Xin chao</li>
          <li>Xin chao</li>
          <li>Xin chao</li>
        </ul>
      )} */}
    </div>
  );
};

export default App;
