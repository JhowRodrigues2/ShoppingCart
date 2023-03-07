import {
  CartArea,
  CategoryProd,
  InfoProd,
  NameProd,
  Product,
  Quantity,
  RemoveBt,
} from "./style";

export type ProductProps = {
  data: {
    _id?: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
  };
  handleRemoveItem: (item: object) => void;
  handleUpdateItem: (item: object, action: string) => any;
};
const Cart = ({ data, handleRemoveItem, handleUpdateItem }: ProductProps) => {
  return (
    <CartArea>
      <td>
        <Product>
          <img src="https://picsum.photos/100/120" alt="" />
          <InfoProd>
            <NameProd>{data.name}</NameProd>
            <CategoryProd>{data.category}</CategoryProd>
          </InfoProd>
        </Product>
      </td>
      <td>R$ {data.price}</td>
      <td>
        <Quantity>
          <button onClick={() => handleUpdateItem(data, "decrease")}>
            <i className="bx bx-minus"></i>
          </button>
          <span>{data.quantity}</span>
          <button onClick={() => handleUpdateItem(data, "increase")}>
            <i className="bx bx-plus"></i>
          </button>
        </Quantity>
      </td>
      <td>{data.price * data.quantity}</td>
      <td>
        <RemoveBt onClick={() => handleRemoveItem(data)}>
          <i className="bx bx-x"></i>
        </RemoveBt>
      </td>
    </CartArea>
  );
};

export default Cart;
