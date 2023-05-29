import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

const App = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const item = useSelector((state) => state.item);
  useEffect(() => {
    fetch(
      "https://reat-redux-side-effects-default-rtdb.firebaseio.com/item.json",
      { method: "PUT", body: JSON.stringify(item) }
    );
  }, [item]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
