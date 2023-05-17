import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(135deg, #ffffff, #8fbbea);
  background-size: cover;
  background-position: center;
  height: 100%;

  padding-bottom: 10px;
`

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const ServicesTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 16px;
`

export const ServicesDescription = styled.p`
  font-size: 16px;
  color: #666666;
  text-align: center;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  transform-origin: center;

  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    transition: transform 0.4s opacity 0.2s ease-in-out;
    transform: scale(1.05);
  }
`

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #4a90e2;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`
