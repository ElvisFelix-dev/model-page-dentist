import styled from 'styled-components'
import imgLogo from '../../assets/imgLogo.png'

export const Container = styled.div`
  background: linear-gradient(135deg, #8fbbea, #ffffff);
  background-size: cover;
  background-position: center;

  header nav {
    float: left;
  }

  header nav ul {
    list-style: none;
  }

  header nav li {
    float: right;
    padding: 15px 20px;
  }

  header li a {
    color: #2c5282;
    text-decoration: none;

    transition: 1s;
  }

  header li a:hover {
    color: #0e1e35;
    font-size: 19px;
  }

  header .logo {
    align-items: center;
    float: right;
    margin-right: 8rem;
    margin-top: 5px;

    width: 50px;
    height: 50px;

    background-size: cover;
    background-position: center;
    background-image: url(${imgLogo});
  }
`
