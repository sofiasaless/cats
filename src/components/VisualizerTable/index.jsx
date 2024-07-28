import styles from './VisualizerTable.module.css';
import gtx_visu from "../../../public/images/logo-list.png";

export default function VisualizerTable () {
    return (
        <section className={styles.content}>

            <div className={styles.table}>
                <div className={styles.logo_visu}>
                    <img src={gtx_visu} alt="Logo Visualizar gatuxos" />
                </div>

                <h2>Lista de <strong>gatuxos</strong> cadastrados</h2>

                {/* <p className={styles.warn}>
                    A requisição pode levar alguns minutos para carregar, mas não se preocupe, os Gatuxos vão aparecer!
                </p> */}

                <table>

                    <thead className={styles.columns}>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Gênero</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>

                </table>

            </div>

            {/* form de atualização do gato na api */}
            {/* <div>
                <div>
                    <span>&times;</span>
                    <h3>Atualize as informações do Gatuxo</h3>
                    <form>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id='name' required />

                        <label htmlFor="age">Idade:</label>
                        <input type="number" min={0} max={20} id='age' />

                        <label htmlFor="gender">Gênero:</label>
                        <select name="gender" id="gender">
                            <option value="Macho">Macho</option>
                            <option value="Femea">Fêmea</option>
                        </select>

                        <button>Atualizar</button>

                    </form>
                </div>
            </div> */}

        </section>
    );
}