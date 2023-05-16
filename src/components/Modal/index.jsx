import { ModalContainer, ModalImage, CloseButton } from './styles'
import { FaTimes } from 'react-icons/fa'

export function Modal({ isOpen, selectedPhoto, closeModal }) {
  return (
    <>
      <ModalContainer isOpen={isOpen} onRequestClose={closeModal}>
        <ModalImage src={selectedPhoto} alt="Selected Photo" />
        <CloseButton onClick={closeModal}>
          <FaTimes size={20} color="#FFF" />
        </CloseButton>
      </ModalContainer>
    </>
  )
}
