import styled from "styled-components";

export const Main = styled.main`
  background: #fff;
  padding: 0 30px;
`;
export const Title = styled.div`
  font-size: 40px;
  padding: 50px 0;
  text-align: center;
`;

export const MainContent = styled.div`
  display: flex;
  section {
    flex: 1;
  }
  aside {
    min-width: 250px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  tr {
    border-bottom: 3px solid #eee;
  }
  th {
    text-align: left;
    padding-bottom: 10px;
    text-transform: uppercase;
    color: #666;
  }

  td {
    padding: 15px 0;
  }
  tbody tr {
    border-bottom: 3px solid #eee;
    &:last-child {
      border: 0;
    }
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
