import styles from '../components/Header.module.css';

function Header() {
    return (
        <>
            <article className={styles.menuPrincipal}>
                <div id="logo">
                    <img src="../public/logo.png" alt="logo digital store" />
                </div>

                <div className={styles.busca}>
                    <input className={styles.caixaPesquisa} type="text" placeholder="Pesquisar produto..." />
                    <a className={styles.lupa} href="#">
                        <img src="../public/Search.png" alt="lupa" />
                    </a>
                </div>

                <div id="login">
                    <a href="#">Cadastre-se</a>
                    <button className="btn botaoRosa"  type="button">Entrar</button>
                </div>

                <div id="carrinho">
                    <button style={{ background: 'none' }} type="button" className="btn position-relative">
                        <img src="../public/Buy.png" alt="carrinho de compra" />
                        <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill" style={{ backgroundColor: '#C92071' }}>
                            1
                            <span className="visually-hidden">Quantidade comprada</span>
                        </span>
                    </button>
                </div>
            </article>

            <nav id="menuNavegacao">
                <ul className={styles.listas}>
                    <li><a id="menuAtivo" href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
