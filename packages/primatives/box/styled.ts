import styled from "styled-components";
import { compose, color, layout } from "styled-system";

const StyledBox = styled.div`
  display: block;
  box-sizing: border-box;
  ${compose(color, layout)}
`;

export default StyledBox;