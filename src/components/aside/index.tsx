import { AsideArea, Box, Checkout, FooterBox, HeaderBox, Info } from "./style";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Aside = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <AsideArea>
      <Box>
        <HeaderBox>Resumo da Compra</HeaderBox>
        <Info>
          <div>
            <span>Sub-total</span>
            <span>R$ {cartTotal}</span>
          </div>
        </Info>
        <FooterBox>
          <span>Total</span>
          <span>{cartTotal}</span>
        </FooterBox>
      </Box>
      <Checkout>Finalizar Compra</Checkout>
    </AsideArea>
  );
};

export default Aside;
