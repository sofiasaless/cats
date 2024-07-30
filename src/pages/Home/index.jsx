import Container from "../../components/Container";
import Header from "../../components/Header";
import gtx_logo from "../../../public/images/home-logoCat.png";
import styles from './Home.module.css';

export default function Home () {
    return (
        <>
            <Header/>
            <Container>
                {
                    <section className={styles.section}>
                        <div className={styles.texts}>
                            <h1>Gatuxos <br /> Api</h1>
                            <p>Site para fins de teste para API Spring. Cadastre um gatinho e o visuailize para testar!</p>
                        </div>

                        <div className={styles.image_content}>
                            <img src={gtx_logo} alt="Logo inicial dos Gatuxos" />
                            <div className={styles.shadow}>

                            </div>
                        </div>
                    </section>
                }
            </Container>
        </>
    );
}