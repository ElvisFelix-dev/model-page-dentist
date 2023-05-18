import { Link } from 'react-router-dom'

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
  ButtonText,
} from './styles'

import { FaArrowRight } from 'react-icons/fa'

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
            <CardTitle>Clínico geral</CardTitle>
            <CardDescription>
              A clínica geral é a área mais abrangente da odontologia e a que
              você deve visitar com mais frequência. É dentro dela que são
              realizados os tratamentos mais simples, como consultas
              preventivas, limpezas, remoção de tártaro, entre outros
              procedimentos.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Ortodontia</CardTitle>
            <CardDescription>
              A ortodontia é outra área muito popular dentro da odontologia. Por
              meio do uso de aparelhos dentários, os pacientes de todas as
              idades podem corrigir o posicionamento dos dentes e ossos faciais,
              tornando o sorriso mais harmônico e funcional.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Odontopediatria</CardTitle>
            <CardDescription>
              As crianças também precisam de acompanhamento dentário e essa é a
              função da odontopediatria. Mesmo durante a dentição de leite, elas
              já estão suscetíveis a cáries e outros problemas, por isso é
              preciso visitar um profissional especializado com regularidade.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Implantodontia</CardTitle>
            <CardDescription>
              Realizamos tratamento com implante é indicado para substituir
              dentes faltantes na boca de forma muito eficiente. Ele é realizado
              por meio da implantação de um cilindro de titânio no osso maxilar,
              substituindo a raiz do dente ausente. Em seguida, é colocada a
              prótese feita sob medida, fixada no implante por meio de
              parafusos.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Prótese dentária</CardTitle>
            <CardDescription>
              O tratamento pode ser realizado em casos de perdas parciais ou
              totais dos dentes. A prótese parcial é indicada quando o paciente
              ainda tem dentes saudáveis e precisa apenas repor as unidades
              faltantes. Já no caso da prótese total, é feita a reposição de
              toda a arcada dentária.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Periodontia</CardTitle>
            <CardDescription>
              O procedimento realizado consiste na raspagem e no alisamento das
              raízes do dente para remoção de placas bacterianas. Além disso, o
              profissional também deve auxiliar o paciente na prevenção de
              problemas nessa região, alertando sobre como realizar a
              higienização correta com escova e fio dental.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>

          <CardContainer>
            <CardImage src={imgLab} alt="" />
            <CardTitle>Clareamento dentário</CardTitle>
            <CardDescription>
              São utilizados agentes clareadores para recuperar a cor original
              dos dentes, transformando a estética do paciente e auxiliando
              muito a autoestima. Pode ser realizado de duas formas, em
              consultório ou em casa. O método realizado em consultório é mais
              potente e feito por meio de lasers e luz alógena.
            </CardDescription>
            <Link to="https://wa.me/" target="_blank" rel="noreferrer">
              <Button>
                <ButtonText>Saber mais</ButtonText>
                <FaArrowRight />
              </Button>
            </Link>
          </CardContainer>
        </CardsContainer>
      </Container>
    </>
  )
}
