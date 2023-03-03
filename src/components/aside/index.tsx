import { ItemProps } from "../content";
import { AsideArea, Box, Checkout, FooterBox, HeaderBox, Info } from "./style";

const Aside = ({ total }: ItemProps) => {
  return (
    <AsideArea>
      <Box>
        <HeaderBox>Resumo da Compra</HeaderBox>
        <Info>
          <div>
            <span>Sub-total</span>
            <span>R$ {total}</span>
          </div>
        </Info>
        <FooterBox>
          <span>Total</span>
          <span>{total}</span>
        </FooterBox>
      </Box>
      <Checkout>Finalizar Compra</Checkout>
    </AsideArea>
  );
};

export default Aside;
