import styled from "styled-components";

interface BackgroundBox {
  backgroundColor?: string;
}

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const Box = styled.div<BackgroundBox>`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 25em;
  background-color: ${(props) => props.backgroundColor};
  padding: 1em;
  border-radius: 1em;
`;

export const BackgroundHome = styled.img`
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

export const BoxInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  align-items: center;
  width: 100%;
  /* max-width: 22em; */
  background-color: whitesmoke;
  padding: 1em;
  border-radius: 1em;
`;
