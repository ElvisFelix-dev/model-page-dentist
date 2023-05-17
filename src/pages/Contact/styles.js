import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  background: linear-gradient(135deg, #8fbbea, #ffffff);
  background-size: cover;
  background-position: center;
  height: 100%;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3rem;

  h2 {
    padding-bottom: 35px;
    color: #2c5282;
  }
`

export const ContactInfoContainer = styled.div`
  max-width: 800px;
  padding: 30px;
  margin: 30px;
  border-radius: 10px;
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #2c5282;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    color: #2c5282;
  }
`

export const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;

  & > div {
    margin-left: 20px;
  }
`

export const ContactIcon = styled.i`
  font-size: 24px;
  color: #3f51b5;
`

export const ContactLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`

export const ContactText = styled.div`
  font-size: 16px;
`

export const MapContainer = styled.div`
  height: 300px;
  width: 100%;
  padding: 8px;
`

export const ContactSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 15px;
    margin-bottom: 15px;
    color: #3f51b5;

    transition: color 0.2s;
  }

  svg:hover {
    color: ${shade(0.2, '#3f51b5')};
  }
`
