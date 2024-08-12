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

export const BackgroundHistory = styled.img`
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

export const BoxActionsHistory = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const BoxContent = styled.div<BackgroundBox>`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  max-width: 25em;
  background-color: ${(props) => props.backgroundColor};
  padding: 1em;
  border-radius: 1em;
  @media (max-width: 768px) {
    max-width: 20em;
    padding: 0.5em;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.5em;
  }
`;

export const BoxList = styled.div`
  width: 100%;
  max-height: 50em;
  border-radius: 1em;
  overflow-y: auto;
  padding: 1em;
  border-radius: "8px";
  background-color: #ced3dc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    padding: 0.5em;
  }
  @media (max-width: 480px) {
    padding: 0.2em;
  }
`;
