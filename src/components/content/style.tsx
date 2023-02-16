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
`;
