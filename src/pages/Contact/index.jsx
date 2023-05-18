import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  ContactInfoContainer,
  ContactPageContainer,
  MapContainer,
  SocialLinks,
  TextArea,
} from './styles'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa'

import Map from '../../components/Map'
import { NavBar } from '../../components/NavBar'

export function Contact() {
  const [showMessageForm, setShowMessageForm] = useState(false)
  const [message, setMessage] = useState('')

  function handleSendMessage() {
    const encodedMessage = encodeURIComponent(message)
    const mailtoLink = `mailto:contato@exemplo.com?body=${encodedMessage}`
    window.location.href = mailtoLink
  }

  return (
    <>
      <Container>
        <NavBar />
        <ContactPageContainer>
          <ContactInfoContainer>
            <h2>Informações de Contato</h2>
            <ul>
              <li>
                <FaMapMarkerAlt color="#2751EC" />
                <span>Endereço: Rua Exemplo, 1234 - Cidade, Estado</span>
              </li>
              <li>
                <FaPhone color="#3A15C1" />
                <span>Telefone: (12) 3456-7890</span>
              </li>
              <li>
                <FaWhatsapp color="#34B7F1" />
                <span>WhatsApp: (12) 98765-4321</span>
              </li>
              <li>
                <FaEnvelope color="#0021A0" />
                <span>Email: contato@example.com</span>
              </li>
            </ul>

            {showMessageForm ? (
              <TextArea>
                <textarea
                  id="mensage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem, juntamento com seu nome"
                  title="Digite sua mensagem"
                />

                <Link to="mailto:contato@exemplo.com">
                  <button onClick={handleSendMessage}>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </button>
                </Link>
              </TextArea>
            ) : (
              <button onClick={() => setShowMessageForm(true)}>
                <FaPaperPlane />
                Mandar Mensagem
              </button>
            )}

            <SocialLinks>
              <h3>Siga-nos em nossas redes sociais</h3>
              <FaFacebook color="#3b5998" size={20} />
              <FaInstagram color="#3f729b" size={20} />
              <FaTwitter color=" #00acee" size={20} />
            </SocialLinks>
          </ContactInfoContainer>
          <MapContainer>
            <h2>Como nos encontrar</h2>

            <p> &#8226; Ficamos proximos á Praça da Matriz</p>
            <Map />
          </MapContainer>
        </ContactPageContainer>
      </Container>
    </>
  )
}
