import logo from '../../assets/img/Logo.svg';
import './styles.css';

function Header() {
  return(
<header>
    <div className="dsmeta-logo-container">
        <img src={logo} />
        <h1>DSMeta</h1>
        <p>Desenvolvido por
            <a href="https://twitter.com/Iranmzk"></a>  @iranmzk
        </p>
    </div>
</header>
  )
}

export default Header;
