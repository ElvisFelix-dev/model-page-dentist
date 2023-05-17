import { Link } from 'react-router-dom'
import {
  Container,
  ContactContainer,
  ContactInfoContainer,
  ContactItemContainer,
  ContactIcon,
  ContactLabel,
  ContactText,
  ContactSocialLinks,
  MapContainer,
} from './styles'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'

import Map from '../../components/Map'
import { NavBar } from '../../components/NavBar'

export function Contact() {
  return (
    <>
      <Container>
        <NavBar />
        <ContactContainer>
          <ContactInfoContainer>
            <h1>Entre em contato</h1>
            <p>
              Se você tem alguma dúvida, sugestão ou quer agendar uma consulta,
              entre em contato conosco pelos meios abaixo.
            </p>
            <ContactItemContainer>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <div>
                <ContactLabel>Endereço</ContactLabel>
                <ContactText>Rua dos Dentistas, 123</ContactText>
                <ContactText>Bairro dos Sorrisos - São Paulo/SP</ContactText>
              </div>
            </ContactItemContainer>

            <ContactItemContainer>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <div>
                <ContactLabel>Telefone</ContactLabel>
                <ContactText>(11) 5555-5555</ContactText>
                <ContactText>(11) 5555-5555</ContactText>
              </div>
            </ContactItemContainer>

            <ContactItemContainer>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <div>
                <ContactLabel>Email</ContactLabel>
                <ContactText>contato@maryjanedentista.com.br</ContactText>
              </div>
            </ContactItemContainer>
          </ContactInfoContainer>
          <h2>Acompanhe-nos nas redes sociais</h2>
        </ContactContainer>
        <ContactSocialLinks>
          <Link to="/">
            <FaFacebook size={25} />
          </Link>

          <Link to="/">
            <FaInstagram size={25} />
          </Link>

          <Link to="/">
            <FaYoutube size={25} />
          </Link>

          <Link to="/">
            <FaTiktok size={30} />
          </Link>
        </ContactSocialLinks>
        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
    </>
  )
}
