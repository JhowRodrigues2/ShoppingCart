export {};
import { useEffect, useState } from "react";
import Aside from "../aside";
import Cart from "../Cart/intex";
import { AddToCart, Main, MainContent, Title } from "./style";
import { api } from "../provider";
import { v4 as uuid } from "uuid";
//function to create a random price to insert in the product
function randomPrince(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Content = () => {
  const [cart, setCart] = useState([]);

  const productObject = {
    name: "produto",
    category: "category",
    price: randomPrince(90, 1200),
    quantity: 1,
  };
  const fetchData = () => {
    api.get("/cart").then((res) => setCart(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(cart);
  const handleAddItem = () => {
    api.post("/cart", productObject).then((res) => {
      fetchData();
    });
  };
  const handleUpdateItem = () => {};
  return (
    <Main>
      <Title> Your Shopping Cart</Title>
      <MainContent>
        <section>
          <AddToCart onClick={handleAddItem}>Adicionar ao carrinho</AddToCart>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th> Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <Cart data={item} key={uuid()} />
              ))}
              {cart.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    <b>Carrinho de compras vazio!</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <Aside />
      </MainContent>
    </Main>
  );
};

export default Content;
