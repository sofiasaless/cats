import styles from './About.module.css';
import Header from "../../components/Header";
import Container from "../../components/Container";

export default function About() {
    return (
        <>
            <Header/>
            <Container>
                {
                    <section className={styles.section}>

                        <div>
                            <h2>Do que os gatuxos se tratam</h2>
                            <i class="bi bi-patch-question"></i>
                        </div>                        

                        <div className={styles.break}></div>
                    
                        <div>
                            <p>
                            Este é um site desenvolvido com intuito inicial de exercitar habilidades Full-Stack, trata-se de um CRUD de gatinhos gatuxos, você poderá cadastrar um Gatuxo, visualizá-lo, editá-lo e deletá-lo. O site foi desenvolvido com ReactJs + Vite para front-end, e para back-end foi usado Java, framework Spring Boot e banco de dados MySQL.
                            </p>
                        </div>

                        <div className={styles.break}></div>

                        <div>
                            <span>Créditos das imagens utilizadas: <a href="https://www.flaticon.com/free-icons/pet" title="pet icons" target="_blank">Pet icons created by Freepik - Flaticon</a></span>
                        </div>
                    
                    </section>
                }
            </Container>
        </>
    );
}