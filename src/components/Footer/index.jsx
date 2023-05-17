import { FaHeart, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import './styles.css'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/eyesgreen_tech/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} color="#d80d30" />
          </a>
          <a
            href="https://twitter.com/elvis__felix"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} color="#d80d30" />
          </a>
          <a
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} color="#d80d30" />
          </a>
        </div>
        <p className="footer__copyright">
          Desenvolvido por 4System <FaHeart size={10} color="#d80d30" />
        </p>
      </footer>
    </>
  )
}
