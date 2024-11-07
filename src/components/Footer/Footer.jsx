import Logo from "../Logo/Logo";
import styles from "./Footer.module.css"



function Footer(props) {
    return (
        <>
            <footer className={styles.footerGeral}>
                <div >
                    <Logo color="#ffffff" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae. Repellat quam maiores neque temporibus, officia distinctio inventore ex corporis quas voluptatem odio explicabo, cumque suscipit harum minus voluptatibus? Fugiat?</p>

                    <div className={styles.social}>
                        <img src="src/assets/facelogo.svg" alt="" />
                        <img className = {styles.insta} src="src/assets/instalogo.svg" alt="" />
                        <img src="src/assets/xlogo.svg" alt="" />
                    </div>
                </div>


                <div className={styles.info}>
                    <ul>
                        <li>Informação</li>
                        <li>Segurança</li>
                        <li>wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus pedidos</li>
                    </ul>
                </div>

                <div className={styles.categorias}>
                    <ul>
                        <li>Categorias</li>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>

                <div className={styles.contato}>
                    <ul>
                        <li>Contato</li>
                        <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li>85 3051-3411</li>
                    </ul>
                </div>

            </footer>
        </>
    )
}
export default Footer;