import styled from "styled-components";

export const Pokedex = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  margin: 1.5rem;
`;
export const Pokemon = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin: 10px;
  text-align: center;
  transition: 200ms ease;
  padding: 0; /* Aumenta el tama;o del huevo*/
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 50%;
  height: 120px;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src
}))`
  max-width: 83%;
  margin-bottom: -123px;
  transform: translate(0px, -41px);
`;

export const Info = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;
`;
