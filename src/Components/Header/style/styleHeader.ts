import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5em 1em;
  }
`;

export const BoxMenu = styled.div``;
