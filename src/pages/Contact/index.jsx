import { Link } from 'react-router-dom'
import {
  Container,
  ContactInfoContainer,
  ContactPageContainer,
  MapContainer,
  SocialLinks,
} from './styles'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa'

import Map from '../../components/Map'
import { NavBar } from '../../components/NavBar'

export function Contact() {
  return (
    <>
      <Container>
        <NavBar />
        <ContactPageContainer>
          <ContactInfoContainer>
            <h2>Informações de Contato</h2>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>Endereço: Rua Exemplo, 1234 - Cidade, Estado</span>
              </li>
              <li>
                <FaPhone />
                <span>Telefone: (12) 3456-7890</span>
              </li>
              <li>
                <FaWhatsapp />
                <span>WhatsApp: (12) 98765-4321</span>
              </li>
              <li>
                <FaEnvelope />
                <span>Email: contato@example.com</span>
              </li>
            </ul>
            <SocialLinks>
              <h3>Siga-nos em nossas redes sociais</h3>
              <FaFacebook size={20} />
              <FaInstagram size={20} />
              <FaTwitter size={20} />
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
