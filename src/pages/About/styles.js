import styled from 'styled-components'

import imgBg from '../../assets/imgBg.png'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: url(${imgBg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`

export const AboutContent = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
  padding: 20px;
`

export const AboutTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`

export const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`

export const AboutPhotosSection = styled.section`
  display: flex;
  justify-content: space-between;
`

export const AboutPhoto = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;

  cursor: pointer;
`
