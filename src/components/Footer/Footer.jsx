import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
    const categories = ["camIseTas", "CalÇas", "bonéS", "HeaDphones", "Tênis"];

    let categoriesTratament = categories.map((category) => {
        let letra = category.split('').at(0).toUpperCase();
        let palavra = category.toLowerCase().slice(1);
        return letra + palavra
    })

    return (
        <>
            <footer className={styles.footerGeral}>
                <div className={styles.container}>
                    <div className={styles.lorem}>
                        <Logo color="#ffffff" />

                        <p className={styles.texto}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>

                        <div className={styles.social}>
                            <a href=""><img src="src/assets/facelogo.svg" alt="Facebook Logo" /></a>
                            <a href=""><img className={styles.insta} src="src/assets/instalogo.svg" alt="Instagram Logo" /></a>
                            <a href=""><img src="src/assets/xlogo.svg" alt="X (Twitter) Logo" /></a>
                        </div>
                    </div>

                    <div className={styles.secaoInfo}>
                        <span className={styles.cabecalho}>Informação</span>
                        <ul>
                            <li> <a href="#"> Sobre Drip Store</a></li>
                            <li> <a href="">Segurança</a></li>
                            <li> <a href="">Wishlist</a></li>
                            <li> <a href="">Blog</a></li>
                            <li> <a href="">Trabalhe conosco</a></li>
                            <li> <a href="">Meus pedidos</a></li>
                        </ul>
                    </div>

                    <div className={styles.secaoCategorias}>
                        <span className={styles.cabecalho}>Categorias</span>
                        <ul>
                            {categoriesTratament.map((category, index) => (
                                <li key={index}>
                                    <a href="#">{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.secaoContato}>
                        <span className={styles.cabecalho}>Contato</span>
                        <ul>
                            <li className={styles.endereco}> <a href="">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</a></li>
                            <li><a href="">(85) 3051-3411</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copy}>
                    <p> &copy; 2022 Digital College</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
