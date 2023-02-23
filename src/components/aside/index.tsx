import { AsideArea, Box, Checkout, FooterBox, HeaderBox, Info } from "./style";

const Aside = () => {
  return (
    <AsideArea>
      <Box>
        <HeaderBox>Resumo da Compra</HeaderBox>
        <Info>
          <div>
            <span>Sub-total</span>
            <span>R$ 418</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </Info>
        <FooterBox>
          <span>Total</span>
          <span>R$418,00</span>
        </FooterBox>
      </Box>
      <Checkout>Finalizar Compra</Checkout>
    </AsideArea>
  );
};

export default Aside;
