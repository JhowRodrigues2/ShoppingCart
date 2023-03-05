import Aside from "../aside";
import Cart from "../Cart/intex";
import { AddToCart, Main, MainContent, Title } from "./style";
import { v4 as uuid } from "uuid";
import Loader from "../loader";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

/*
=  - Desabilitar botão quando quantidade chegar em um ou remover o item quando zerar
  - Design responsivo*/

const Content = () => {
  const { handleAddItem, cart, handleUpdateItem, isLoading, handleRemoveItem } =
    useContext(CartContext);

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
              {cart.map((item: any) => (
                <Cart
                  data={item}
                  key={uuid()}
                  handleRemoveItem={handleRemoveItem}
                  handleUpdateItem={handleUpdateItem}
                />
              ))}
              {cart.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <b>Carrinho de compras vazio!</b>
                    {isLoading == true ? <Loader /> : ""}
                  </td>
                </tr>
              ) : (
                ""
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
