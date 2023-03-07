import styled from "styled-components";

export const Main = styled.main`
  background: #fff;

  padding: 0 30px 30px;
`;
export const Title = styled.div`
  font-size: 40px;
  padding: 50px 0;
  text-align: center;
`;

export const MainContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    thead {
      display: none;
    }
  }
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
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const AddToCart = styled.button`
  padding: 5px 10px;
  margin-bottom: 15px;
`;
