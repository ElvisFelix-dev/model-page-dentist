import { Link } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'

import './styles.css'

export function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
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
