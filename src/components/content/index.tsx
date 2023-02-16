export {};
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
              <td></td>
              <td>R$ 120</td>
              <td></td>
              <td>R$ 240</td>
              <td>
                <i className="bx bx-x"></i>
              </td>
            </tbody>
          </table>
        </section>
        <aside> Resumo das Compras</aside>
      </MainContent>
    </Main>
  );
};

export default Content;
