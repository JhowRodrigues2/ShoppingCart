export {};
import Aside from "../aside";
import Cart from "../Cart/intex";
import { Main, MainContent, Title } from "./style";

const Content = () => {
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
              <Cart />
              <Cart />
              <Cart />
            </tbody>
          </table>
        </section>
        <Aside />
      </MainContent>
    </Main>
  );
};

export default Content;
