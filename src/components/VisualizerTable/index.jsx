import styles from './VisualizerTable.module.css';
import gtx_visu from "../../../public/images/logo-list.png";
import axios from 'axios';
import { useState, useEffect } from 'react';
import trashImg from "../../../public/images/trash-fill.svg";
import pencilImg from "../../../public/images/pencil-square.svg";

export default function VisualizerTable () {
    const [catsData, setCatsData] = useState([]);

    useEffect(() => {
        axios.get('https://cats-api-phsr.onrender.com/cats')
        .then((response) => {
            setCatsData(response.data);
            document.getElementById('content').style.marginTop = '90px';
            document.getElementById('warn').style.display = 'none';
        })
        .catch((error) => {
            console.log('Error durante recuperação dos gatuxos: ' + error);
        });
    }, []);

    return (
        <section className={styles.content} id='content'>

            <div className={styles.table}>
                <div className={styles.logo_visu}>
                    <img src={gtx_visu} alt="Logo Visualizar gatuxos" />
                </div>

                <h2>Lista de <strong>gatuxos</strong> cadastrados</h2>

                <p className={styles.warn} id='warn'>
                    A requisição pode levar alguns minutos para carregar, mas não se preocupe, os Gatuxos vão aparecer!
                </p>

                <table>

                    <thead className={styles.columns}>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Gênero</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id='cats-table-response'>
                    {catsData.map(cat => (
                        <tr key={cat.id}>
                            <td>{cat.name}</td>
                            <td>{cat.age}</td>
                            <td>{cat.gender}</td>
                            <button onClick=''><img src={trashImg} /></button>
                            <button onClick=''><img src={pencilImg} /></button>
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>

            {/* form de atualização do gato na api */}
            <div className={styles.editform}>
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
            </div>

        </section>
    );
}