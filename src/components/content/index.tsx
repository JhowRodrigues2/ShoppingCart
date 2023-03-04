export {};
import { useEffect, useState } from "react";
import Aside from "../aside";
import Cart, { ProductProps } from "../Cart/intex";
import { AddToCart, Main, MainContent, Title } from "./style";
import { api } from "../provider";
import { v4 as uuid } from "uuid";
import Loader from "../loader";
//function to create a random price to insert in the product
function randomPrince(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export type ItemProps = {
  _id?: string;
  item?: object;
  quantity?: number;
  total?: number;
};

/*
   - Compartilhar total através de context api 
  - Desabilitar botão quando quantidade chegar em um ou remover o item quando zerar
  - Design responsivo*/

const Content = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const productObject = {
    name: "produto",
    category: "category",
    price: randomPrince(90, 1200),
    quantity: 1,
  };
  const fetchData = async () => {
    setIsLoading(true);
    await api.get("/cart").then((res) => setCart(res.data));
    setIsLoading(false);
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
    const newData = { ...item, quantity: newQuantity };
    delete newData._id;
    api.put(`/cart/${item._id}`, newData).then((res) => {
      fetchData();
    });
  };
  const getTotal = () => {
    let sum = 0;
    for (let item of cart) {
      sum = +item.price * item.quantity;
    }
    return sum;
  };
  const cartTotal = getTotal();

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
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    {isLoading ? <Loader /> : ""}
                    <b>Carrinho de compras vazio!</b>
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </section>
        <Aside total={cartTotal} />
      </MainContent>
    </Main>
  );
};

export default Content;
