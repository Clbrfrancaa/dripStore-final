import Logo from "../Logo/Logo";
import styles from "./Footer.module.css"



function Footer(props) {
    return (
        <>
            <footer className={styles.footerGeral}>
                <div className={styles.container} >
                    <div className={styles.lorem}>
                        <Logo color="#ffffff" />

                        <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                        <div className={styles.social}>
                            <img src="src/assets/facelogo.svg" alt="" />
                            <img className={styles.insta} src="src/assets/instalogo.svg" alt="" />
                            <img src="src/assets/xlogo.svg" alt="" />
                        </div>
                    </div>


                    <div className={styles.info}>
                        <span className={styles.cabeçalho} >Informação</span>
                        <ul>

                            <li>Segurança</li>
                            <li>wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus pedidos</li>
                        </ul>
                    </div>

                    <div className={styles.categorias}>
                        <span className={styles.cabeçalho} >Categorias</span>
                        <ul>

                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>

                    <div className={styles.contato}>
                        <span className={styles.cabeçalho}>Contato</span>
                        <ul>

                            <li className = {styles.endereco} >Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                            <li>85 3051-3411</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copy} >
                    <p> &copy; 2022 Digital College</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;