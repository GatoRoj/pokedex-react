import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  width: 87%;
  display: grid;
  grid-template-columns: 75px 1fr;
  justify-content: center;
  align-items: center;
  padding-left: 1.5em;
  padding-right: 1em;
`;

export const Percent = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
`;

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #21cf21;
`;
