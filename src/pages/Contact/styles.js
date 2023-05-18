import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  background: linear-gradient(135deg, #ffffff, #8fbbea);
  background-size: cover;
  background-position: center;
  height: 100%;
`

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1400px) {
    /* Estilos para telas grandes com largura mínima de 1200px */
    justify-content: center;
  }
`

export const ContactInfoContainer = styled.div`
  width: 50%;
  padding-left: 80px;

  h2 {
    margin-bottom: 25px;
    color: #2c5282;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  svg {
    margin-right: 10px;
  }

  button {
    width: 30%;
    height: 40px;

    border-radius: 8px;
    border: none;

    background-color: #2c5282;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#2c5282')};
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (min-width: 1200px) {
      /* Estilos para telas grandes com largura mínima de 1200px */
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas grandes com largura mínima de 1200px */
    padding-left: 120px;
  }
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  textarea {
    border: 1px solid rgb(200, 200, 200);
    width: 70%;
    height: 180px;
    padding: 15px;

    margin-bottom: 20px;

    resize: none;

    border-radius: 8px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  button {
    width: 30%;
    height: 40px;

    border-radius: 8px;
    border: none;

    background-color: #2c5282;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#2c5282')};
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`

export const SocialLinks = styled.div`
  h3 {
    padding-top: 25px;
    color: #2c5282;
  }

  svg {
    margin-right: 10px;
    margin-top: 15px;
  }
`

export const MapContainer = styled.div`
  width: 50%;
  height: 500px;
  margin-right: 10px;
  border-radius: 8px;

  h2 {
    margin-bottom: 20px;
    color: #2c5282;
  }

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas grandes com largura mínima de 1200px */
    width: 60%;
    height: 800px;
  }
`
