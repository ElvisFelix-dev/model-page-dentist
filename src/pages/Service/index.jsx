import {
  Container,
  CardTitle,
  Button,
  CardContainer,
  CardDescription,
  CardImage,
  CardsContainer,
  ServicesContainer,
  ServicesTitle,
  ServicesDescription,
} from './styles'

import { NavBar } from '../../components/NavBar'
import imgLab from '../../assets/imgLab.png'

export function Service() {
  return (
    <>
      <Container>
        <NavBar />
        <ServicesContainer>
          <ServicesTitle>Nossos Serviços</ServicesTitle>
          <ServicesDescription>
            Oferecemos serviços de qualidade para cuidar do seu sorriso e
            garantir a sua satisfação.
          </ServicesDescription>
        </ServicesContainer>
        <CardsContainer>
          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Titulo</CardTitle>
            <CardDescription>Descrição</CardDescription>
            <Button>Saber mais</Button>
          </CardContainer>
        </CardsContainer>
      </Container>
    </>
  )
}
