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
              Dr. Jane é especialista em uma ampla gama de tratamentos
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
                  onClick={() => openModal(`${imgLab}`)}
                />
                <AboutPhotoText>Texto da Foto 1</AboutPhotoText>
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhotoText>Texto da Foto 2</AboutPhotoText>
                <AboutPhoto
                  src={imgWomam}
                  alt="Clinic Photo 2"
                  onClick={() => openModal(`${imgWomam}`)}
                />
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhoto
                  src={imgOffice}
                  alt="Clinic Photo 3"
                  onClick={() => openModal(`${imgOffice}`)}
                />
                <AboutPhotoText>Texto da Foto 3</AboutPhotoText>
              </AboutPhotoItem>

              <AboutPhotoItem>
                <AboutPhotoText>Texto da Foto 4</AboutPhotoText>
                <AboutPhoto
                  src={imgPatient}
                  alt="Clinic Photo 3"
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
                <AboutPhotoText>Texto da Foto 4</AboutPhotoText>
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
