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

export const AboutContent = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
  padding: 20px;
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
  cursor: pointer;
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

  cursor: pointer;
`

export const AboutPhotoItem = styled.div`
  display: flex;
  align-items: center;
`

export const AboutPhotoText = styled.div`
  padding: 60px 40px;
  width: 40%;
  height: 350px;
  align-items: center;
  color: #fff;

  text-align: center;
  background-color: #045181;
`

export const ContainerPhotos = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
