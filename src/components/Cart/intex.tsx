import {
  CategoryProd,
  InfoProd,
  NameProd,
  Product,
  Quantity,
  RemoveBt,
} from "./style";

type ProductProps = {
  data: {
    _id?: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
  };
};

const Cart = ({ data }: ProductProps) => {
  const handleRemoveItem = () => {};

  return (
    <tr>
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
          <button>
            <i className="bx bx-minus"></i>
          </button>
          <span>{data.quantity}</span>
          <button>
            <i className="bx bx-plus"></i>
          </button>
        </Quantity>
      </td>
      <td>{data.price * data.quantity}</td>
      <td>
        <RemoveBt onClick={handleRemoveItem}>
          <i className="bx bx-x"></i>
        </RemoveBt>
      </td>
    </tr>
  );
};

export default Cart;
