import { Link } from 'react-router-dom'
import { Container } from './styles'

export function NavBar() {
  return (
    <Container>
      <header className="nav">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="clear"></div>
      </header>
    </Container>
  )
}
