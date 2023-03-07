import { createContext, useState, useEffect } from "react";
import { api } from "../components/provider";

export type ItemProps = {
  _id?: string;
  item?: object;
  quantity?: number;
  total?: number;
};
type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  cart: any;
  handleAddItem: () => void;
  handleRemoveItem: (item: object) => void;
  handleUpdateItem: (item: object, action: string) => any;
  cartTotal: number;
  randomPrince: (min: number, max: number) => number;
  isLoading: boolean;
};

export const CartContext = createContext({} as ContextProps);

function randomPrince(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<any>([]);
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
    if (cart.length == 0) {
      setIsLoading(false);
    }
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
    let newQuantity: any = item.quantity;
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

    if (newQuantity === 0) {
      api.delete(`/cart/${item._id}`).then((res) => {
        fetchData();
      });
    }
  };
  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  };
  const cartTotal = getTotal();
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItem,
        handleRemoveItem,
        handleUpdateItem,
        cartTotal,
        randomPrince,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
