import { useState } from 'react'
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutTitle,
  AboutPhoto,
  AboutPhotosSection,
  AboutPhotoItem,
  AboutPhotoText,
  ContainerPhotos,
  Container,
} from './styles'

import { Modal } from '../../components/Modal'
import { NavBar } from '../../components/NavBar'

import imgLab from '../../assets/imgLab.png'
import imgWomam from '../../assets/imgWomam.png'
import imgOffice from '../../assets/imgOffice.png'
import imgPatient from '../../assets/imgPatient.png'
import imgDentist from '../../assets/imgDentist.png'

export function About() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openModal = (photo) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }
  return (
    <>
      <Container>
        <NavBar />
        <AboutContainer>
          <AboutContent>
            <AboutTitle>Prazer, Dra Mary Jane</AboutTitle>
            <AboutDescription>
              A Dra. Mary Jane é uma dentista altamente qualificada e
              experiente, dedicada a fornecer atendimento odontológico
              excepcional a seus pacientes. Com mais de 10 anos de experiência
              na área, ela tem paixão por criar belos sorrisos e garantir a
              saúde bucal ideal para seus pacientes.
            </AboutDescription>
            <AboutDescription>
              Dra Mary Jane é especialista em uma ampla gama de tratamentos
              dentários, incluindo odontologia geral, odontologia estética e
              odontologia restauradora. Ela se mantém atualizada com os últimos
              avanços na odontologia e utiliza tecnologia de ponta para oferecer
              os melhores resultados possíveis para seus pacientes.
            </AboutDescription>
            <AboutDescription>
              Os pacientes apreciam a abordagem gentil da Dra. Jane, a atenção
              aos detalhes e a capacidade de criar um ambiente confortável e
              descontraído durante suas consultas odontológicas. Ela toma o
              tempo para ouvi-la. preocupa e os educa sobre sua saúde bucal,
              capacitando-os a tomar decisões informadas sobre seus cuidados
              odontológicos.
            </AboutDescription>
          </AboutContent>

          <ContainerPhotos>
            <AboutPhotosSection>
              <AboutPhotoItem>
                <AboutPhoto
                  src={imgLab}
                  alt="Clinic Photo 1"
                  title="Bem-estar e conforto para nossos pacientes"
                  onClick={() => openModal(`${imgLab}`)}
                />
                <AboutPhotoText>
                  A clínica da Dra. Mary Jane é um ambiente moderno e acolhedor,
                  projetado com o conforto e bem-estar dos pacientes em mente.{' '}
                  <br />
                  <br />
                  Investimos em equipamentos de última geração para oferecer
                  tratamentos odontológicos de alta qualidade e precisão.
                </AboutPhotoText>
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhotoText>
                  Priorizamos um atendimento de excelência e personalizado.
                  <br />
                  <br />
                  Nossa equipe de profissionais qualificados está comprometida
                  em proporcionar uma experiência única aos nossos pacientes,
                  desde o momento em que entram na clínica até o término do
                  tratamento.{' '}
                </AboutPhotoText>
                <AboutPhoto
                  src={imgWomam}
                  alt="Clinic Photo 2"
                  title="Tratamento personalizado"
                  onClick={() => openModal(`${imgWomam}`)}
                />
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhoto
                  src={imgOffice}
                  alt="Clinic Photo 3"
                  title="Equipamentos modernos"
                  onClick={() => openModal(`${imgOffice}`)}
                />
                <AboutPhotoText>
                  Nossos equipamentos avançados nos permitem realizar
                  procedimentos modernos e minimamente invasivos, garantindo
                  resultados eficientes e seguros.
                  <br />
                  <br />
                  Venha conhecer a nossa clínica e experimente o que há de mais
                  moderno na odontologia.
                </AboutPhotoText>
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhotoText>
                  Nossos dentistas são atenciosos, empáticos e dedicados a
                  entender as necessidades e desejos de cada paciente,
                  oferecendo soluções personalizadas e cuidados de alta
                  qualidade.
                  <br />
                  <br />
                  Se você busca um atendimento odontológico diferenciado, venha
                  nos visitar e confira o que a Dra. Mary Jane e sua equipe têm
                  a oferecer.
                </AboutPhotoText>
                <AboutPhoto
                  src={imgPatient}
                  alt="Clinic Photo 3"
                  title="Atentimento cuidadoso"
                  onClick={() => openModal(`${imgPatient}`)}
                />
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhoto
                  src={imgDentist}
                  alt="Dr. Mary Jane Photo"
                  title="Dra Mary Jane"
                  onClick={() => openModal(`${imgDentist}`)}
                />
                <AboutPhotoText>
                  Olá! Sou a Dra. Mary Jane e é um imenso prazer trabalhar na
                  área odontológica. Desde cedo, descobri minha paixão por
                  cuidar da saúde bucal das pessoas e transformar sorrisos.
                  <br />
                  <br />
                  Acredito que a odontologia vai além do tratamento dos dentes,
                  pois está diretamente ligada à autoestima, confiança e
                  qualidade de vida dos meus pacientes.{' '}
                </AboutPhotoText>
              </AboutPhotoItem>
            </AboutPhotosSection>
          </ContainerPhotos>

          <Modal
            isOpen={!!selectedPhoto}
            selectedPhoto={selectedPhoto}
            closeModal={closeModal}
          />
        </AboutContainer>
      </Container>
    </>
  )
}
