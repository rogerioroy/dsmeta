import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por  Rogerio Vasconcelos  na Semana Spring React
                    <a href="https://www.instagram.com/devsuperior.ig">@Devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header;