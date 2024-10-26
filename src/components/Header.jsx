import styles from '../components/Header.module.css';
import Logo from './Logo'
import BuyBox from './BuyBox'


function Header() {
    return (
        <>
        <div className={styles.headerGeral}>
            <article className={styles.menuPrincipal}>
                <div className={styles.logo}>
                    {/* <img src="../public/logo.png" alt="logo digital store" /> */}
                    <Logo />
                </div>

                <div className={styles.busca}>
                    <input className={styles.caixaPesquisa}  size= "55" type="text" placeholder="Pesquisar produto..." />
                    <a className={styles.lupa} href="#">
                        <img src="../public/Search.png" alt="lupa" />
                    </a>
                </div>

                <div className={styles.login}>
                    <a href="#">Cadastre-se</a>
                    <button className={`btn ${styles.botaoRosa}`} type="button">Entrar</button>
                </div>

                <div className="carrinho">
                    <button style={{ background: 'none', outline: 'none', boxShadow: 'none' }} type="button" className="btn position-relative">
                        {/* <img src="../public/Buy.svg" alt="carrinho de compra" /> */}
                        <BuyBox />
                        <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill" style={{ backgroundColor: '#C92071' }}>
                            2
                            <span className="visually-hidden">Quantidade comprada</span>
                        </span>
                    </button>
                </div>
            </article>

            <nav className={styles.menuNavegacao}>
                <ul className={styles.listas}>
                    <li><a className={styles.menuAtivo} href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
            </nav>
            </div>
        </>
    );
}
export default Header;
