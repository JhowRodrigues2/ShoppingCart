import styled from "styled-components";

export const AsideArea = styled.aside`
  margin-left: 30px;
`;

export const Box = styled.div`
  margin-bottom: 15px;
  border: 1px solid #ccc;
  background: #eee;
  color: #222;
`;

export const HeaderBox = styled.header`
  padding: 15px;
  font-size: 16px;
`;
export const FooterBox = styled.footer`
  padding: 15px 20px;
  background: #ddd;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  padding: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    &:last-child {
      margin: 0;
    }
  }
`;

export const Checkout = styled.button`
  border: 0;
  background: #3cb371;
  display: block;
  width: 100%;
  color: #fff;
  padding: 15px 0;
  text-transform: uppercase;
  letter-spacing: 1px solid;
  &:hover {
    background: #80b497;
  }
`;
