import { ModalContainer, ModalImage, CloseButton } from './styles'
import { FaTimes } from 'react-icons/fa'

export function Modal({
  isOpen,
  selectedPhoto,
  closeModal,
  handleOverlayClick,
}) {
  return (
    <>
      <ModalContainer
        isOpen={isOpen}
        onRequestClose={closeModal}
        onClick={handleOverlayClick}
      >
        <ModalImage src={selectedPhoto} alt="Selected Photo" />
        <CloseButton onClick={closeModal}>
          <FaTimes size={20} color="#FFF" />
        </CloseButton>
      </ModalContainer>
    </>
  )
}
