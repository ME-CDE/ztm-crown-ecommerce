import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 50px;
`;

export const Categorytitle = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 30px;
`;
