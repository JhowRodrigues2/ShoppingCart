import React from "react";
import {
  CategoryProd,
  InfoProd,
  NameProd,
  Product,
  Quantity,
  RemoveBt,
} from "./style";

const Cart = () => {
  return (
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
  );
};

export default Cart;
