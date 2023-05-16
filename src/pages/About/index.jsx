import { useState } from 'react'
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutTitle,
  AboutPhoto,
  AboutPhotosSection,
} from './styles'

import { Modal } from '../../components/Modal'

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
      <AboutContainer>
        <AboutContent>
          <AboutTitle>About Mary Jane, DDS</AboutTitle>
          <AboutDescription>
            Dr. Mary Jane is a highly skilled and experienced dentist dedicated
            to providing exceptional dental care to her patients. With over 10
            years of experience in the field, she has a passion for creating
            beautiful smiles and ensuring optimal oral health for her patients.
          </AboutDescription>
          <AboutDescription>
            Dr. Jane specializes in a wide range of dental treatments, including
            general dentistry, cosmetic dentistry, and restorative dentistry.
            She stays up-to-date with the latest advancements in dentistry and
            utilizes state-of-the-art technology to deliver the best possible
            outcomes for her patients.
          </AboutDescription>
          <AboutDescription>
            Patients appreciate Dr. Jane's gentle approach, attention to detail,
            and ability to create a comfortable and relaxed environment during
            their dental visits. She takes the time to listen to her patients'
            concerns and educates them about their oral health, empowering them
            to make informed decisions about their dental care.
          </AboutDescription>
        </AboutContent>

        <AboutPhotosSection>
          <AboutPhoto
            src={imgLab}
            alt="Clinic Photo 1"
            onClick={() => openModal(`${imgLab}`)}
          />
          <AboutPhoto
            src={imgWomam}
            alt="Clinic Photo 2"
            onClick={() => openModal(`${imgWomam}`)}
          />
          <AboutPhoto
            src={imgOffice}
            alt="Clinic Photo 3"
            onClick={() => openModal(`${imgOffice}`)}
          />
          <AboutPhoto
            src={imgPatient}
            alt="Clinic Photo 3"
            onClick={() => openModal(`${imgPatient}`)}
          />
          <AboutPhoto
            src={imgDentist}
            alt="Dr. Mary Jane Photo"
            onClick={() => openModal(`${imgDentist}`)}
          />
        </AboutPhotosSection>
        <Modal
          isOpen={!!selectedPhoto}
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
        />
      </AboutContainer>
    </>
  )
}
