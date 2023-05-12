import { Link } from 'react-router-dom'

import './styles.css'

export function Home() {
  return (
    <>
      <div className="container">
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

        <aside>
          <h1>Dra Mary Jane</h1>
          <p>
            Se você procura uma profissional qualificada, <br /> e dedicada na
            área de, <br />
            odontologia, você está no lugar certo.
          </p>

          <button>Saber Mais</button>
        </aside>
      </div>
    </>
  )
}
