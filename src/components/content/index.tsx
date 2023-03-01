export {};
import { useEffect, useState } from "react";
import Aside from "../aside";
import Cart, { ProductProps } from "../Cart/intex";
import { AddToCart, Main, MainContent, Title } from "./style";
import { api } from "../provider";
import { v4 as uuid } from "uuid";
//function to create a random price to insert in the product
function randomPrince(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export type ItemProps = {
  _id?: string;
  item: object;
  quantity?: number;
};

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

  const handleAddItem = () => {
    api.post("/cart", productObject).then((res) => {
      fetchData();
    });
  };
  const handleRemoveItem = (item: any) => {
    api.delete(`/cart/${item._id}`).then((res) => {
      fetchData();
    });
  };

  const handleUpdateItem = (item: ItemProps, action: string) => {
    let newQuantity = item.quantity;
    if (action === "decrease") {
      newQuantity -= 1;
    }
    if (action === "increase") {
      newQuantity += 1;
    }
    console.log(newQuantity);
  };

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
                <Cart
                  data={item}
                  key={uuid()}
                  handleRemoveItem={handleRemoveItem}
                  handleUpdateItem={handleUpdateItem}
                />
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
