import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(135deg, #ffffff, #8fbbea);
  background-size: cover;
  background-position: center;
  height: 100%;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Adicionado flex-wrap para que os elementos possam quebrar linha em telas menores */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const AboutContent = styled.div`
  max-width: 800px;
  padding: 20px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const FlexAbout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
    height: auto;
    max-width: 400px; /* Limitando a largura máxima da imagem para telas menores */
    max-height: 285px; /* Limitando a altura máxima da imagem para telas menores */
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;

    img {
      width: 90%;
    }
  }
`

export const AboutTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c5282;
`

export const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #000;
`

export const AboutPhotosSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const AboutPhoto = styled.img`
  object-fit: cover;
  margin: 10px;
  width: 100%;
  height: 350px;
  background-position: center;
  background-size: cover;

  /* Estilos para alternar a posição entre direita e esquerda */
  &:nth-child(even) {
    float: right;
  }

  &:nth-child(odd) {
    float: left;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`

export const AboutPhotoItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutPhotoText = styled.div`
  padding: 60px 40px;
  width: 100%;
  height: 350px;
  align-items: center;
  color: #fff;
  text-align: center;
  background-color: #045181;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px;
  }
`

export const ContainerPhotos = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
