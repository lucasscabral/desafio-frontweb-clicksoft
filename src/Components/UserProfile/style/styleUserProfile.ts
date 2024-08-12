import styled from "styled-components";

interface BoxProps {
  width?: string;
  heigth?: string;
  marginTop?: string;
  display?: string;
  padding?: string;
}

export const Content = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  align-items: center;
  width: 100%;
  max-width: 25em;
  background-color: whitesmoke;
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);

  padding: 1em;
  border-radius: 1em;
`;

export const Box = styled.div<BoxProps>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.heigth};
  margin-top: ${(props) => props.marginTop};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
`;
export const ImageProfile = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  width: 20em;
  gap: 2em;
`;
