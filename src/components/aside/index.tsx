import React from "react";
import { Box, FooterBox, HeaderBox, Info } from "./style";

const Aside = () => {
  return (
    <aside>
      <Box>
        <HeaderBox></HeaderBox>
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
        <FooterBox></FooterBox>
      </Box>
    </aside>
  );
};

export default Aside;
