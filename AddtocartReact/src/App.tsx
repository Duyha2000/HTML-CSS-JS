import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import CartModal from "./CartModal";

const carts = [
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "22000000 ₫",
    product_name: "Điện thoại Samsung Galaxy S22 - Màu Đen",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "18000000 ₫",
    product_name: "Laptop Dell Inspiron 15 - Core i7",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "3500000 ₫",
    product_name: "Tai nghe Bluetooth Sony WH-1000XM4",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "1200000 ₫",
    product_name: "Chuột không dây Logitech MX Master 3",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "45000000 ₫",
    product_name: "Smart TV Samsung 4K 55 inch",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "500000 ₫",
    product_name: "Bàn phím cơ Corsair K95 RGB Platinum XT",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "3000000 ₫",
    product_name: "Máy ảnh Canon EOS R5",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "800000 ₫",
    product_name: "Loa Bluetooth JBL Flip 5",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "25000000 ₫",
    product_name: "Apple iPad Pro 12.9 inch (2021)",
  },
  {
    id: uuidv4(),
    image:
      "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg",
    price: "150000 ₫",
    product_name: "Ổ cứng SSD Samsung 1TB",
  },
];

interface CartItem {
  id: string;
  image: string;
  price: string;
  product_name: string;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (id: string) => () => {
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, increase the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;

      setCart(updatedCart);
      toast.success("Sản phẩm đã được thêm vào giỏ hàng");
    } else {
      // Product is not in the cart, add it with quantity 1
      const productToAdd = carts.find((cart) => cart.id === id);

      if (productToAdd) {
        setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
        toast.success("Sản phẩm đã được thêm vào giỏ hàng");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // Modal:
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };
  console.log(cart, "sss");
  return (
    <>
      <ToastContainer />
      <header>
        <div className="header-menu-container">
          <p className="header-menu-item">Trang chủ</p>
          <p className="header-menu-item"> Danh sách sản phẩm</p>
        </div>
        <div className="header-menu-cart" onClick={handleOpenCartModal}>
          <ShoppingCartIcon />
          <span>{cart?.length}</span>
        </div>
        {isCartModalOpen && (
          <CartModal
            cart={cart}
            onClose={handleCloseCartModal}
            onDecrease={(id: string) => {
              const existingProductIndex = cart.findIndex(
                (item) => item.id === id
              );
              const updatedCart = [...cart];
              if (existingProductIndex !== -1) {
                if (updatedCart[existingProductIndex].quantity === 1) {
                  updatedCart.splice(existingProductIndex, 1);
                } else {
                  updatedCart[existingProductIndex].quantity -= 1;
                }
              }
              setCart(updatedCart);
            }}
            onIncrease={(id: string) => {
              const existingProductIndex = cart.findIndex(
                (item) => item.id === id
              );
              const updatedCart = [...cart];
              if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex].quantity += 1;
              }
              setCart(updatedCart);
            }}
            onDelete={(id: string) => {
              const existingProductIndex = cart.findIndex(
                (item) => item.id === id
              );
              const updatedCart = [...cart];
              if (existingProductIndex !== -1) {
                updatedCart.splice(existingProductIndex, 1);
              }
              setCart(updatedCart);
            }}
          />
        )}
      </header>

      <main>
        <h1>Danh sách sản phẩm</h1>
        <div className="product-container">
          {carts.map((cart) => (
            <div className="product-item" key={uuidv4()}>
              <img src={cart.image} alt="" />
              <p>{cart.product_name}</p>
              <p>{cart.price}</p>
              <button onClick={handleAddToCart(cart.id)}>
                <span>
                  <ShoppingCartIcon />
                </span>
                <span>Thêm vào giỏ hàng</span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
