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
`

export const ContactInfoContainer = styled.div`
  width: 50%;
  padding-left: 80px;

  h2 {
    margin-bottom: 25px;
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
`

export const SocialLinks = styled.div`
  h3 {
    padding-top: 25px;
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

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
`
