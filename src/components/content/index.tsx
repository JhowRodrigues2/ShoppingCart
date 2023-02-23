export {};
import Aside from "../aside";
import {
  CategoryProd,
  InfoProd,
  Main,
  MainContent,
  NameProd,
  Product,
  Quantity,
  RemoveBt,
  Title,
} from "./style";

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
              <tr>
                <td>
                  <Product>
                    <img src="https://picsum.photos/100/120" alt="" />
                    <InfoProd>
                      <NameProd>nome do Produto</NameProd>
                      <CategoryProd>Categoria</CategoryProd>
                    </InfoProd>
                  </Product>
                </td>
                <td>R$ 120</td>
                <td>
                  <Quantity>
                    <button>
                      <i className="bx bx-minus"></i>
                    </button>
                    <span>2</span>
                    <button>
                      <i className="bx bx-plus"></i>
                    </button>
                  </Quantity>
                </td>
                <td>R$ 240</td>
                <td>
                  <RemoveBt>
                    <i className="bx bx-x"></i>
                  </RemoveBt>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <Aside />
      </MainContent>
    </Main>
  );
};

export default Content;
