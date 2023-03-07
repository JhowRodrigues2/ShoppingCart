import styled from "styled-components";
export const CartArea = styled.tr`
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const Product = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 6px;
  }
`;
export const InfoProd = styled.div`
  margin-left: 20px;
`;
export const NameProd = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const CategoryProd = styled.div`
  color: #666;
`;
export const RemoveBt = styled.button`
  background: #eee;
  border: 0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:hover {
    background: #ddd;
  }
`;
export const Quantity = styled.div`
  background: #eee;
  display: inline-flex;
  padding: 0 0;
  justify-content: space-around;
  min-width: 60px;
  border-radius: 20px;
  align-items: center;
  overflow: hidden;
  height: 30px;
  button {
    align-items: center;
    display: flex;
    background: transparent;
    border: 0;
    padding: 0 10px;
    font-size: 20px;
    height: 100%;
  }
  button:hover {
    background: #ddd;
  }
  span {
    margin: 0 10px;
  }
`;
