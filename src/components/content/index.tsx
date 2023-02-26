export {};
import { useEffect, useState } from "react";
import Aside from "../aside";
import Cart from "../Cart/intex";
import { Main, MainContent, Title } from "./style";
import { api } from "../provider";
const Content = () => {
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    api.get("/cart").then((res) => setCart(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Main>
      <Title> Your Shopping Cart</Title>
      <MainContent>
        <section>
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
                <Cart />
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
