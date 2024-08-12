import styled from "styled-components";

export const Content = styled.div``;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: "#F5F5F5";
`;
export const Title = styled.h1`
  font-family: sans-serif;
  color: #363535;
`;

export const BackgroundInitialScreen = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
`;
