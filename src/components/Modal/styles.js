import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalContainer = styled(Modal)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`

export const ModalImage = styled.img`
  position: fixed;
  max-width: 600px;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 4em 2em;
  background-color: #181c2e;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    max-width: 400px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 7rem;
  left: 56.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;

  background: none;
  border: none;

  outline: none;

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`
