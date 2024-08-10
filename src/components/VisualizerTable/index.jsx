import styles from './VisualizerTable.module.css';
import gtx_visu from "../../../public/images/logo-list.png";
import trashImg from "../../../public/images/trash-fill.svg";
import pencilImg from "../../../public/images/pencil-square.svg";
import EditBox from '../EditBox';
import { useState } from 'react';

export default function VisualizerTable ( { data, requestStatus, deleteCat } ) {

    const [selectedCat, setSelectedCat] = useState(null); // Estado para armazenar o gato selecionado

    const showEditForm = (cat, id) => {
        setSelectedCat(cat); // Define o gato a ser editado
    };

    const closeEditForm = () => {
        setSelectedCat(null); // Fecha o formulário de edição
    };

    return (
        <section className={styles.content} id='content'>

            <div className={styles.table}>
                <div className={styles.logo_visu}>
                    <img src={gtx_visu} alt="Logo Visualizar gatuxos" />
                </div>

                <h2>Lista de <strong>gatuxos</strong> cadastrados</h2>

                <p className={styles.warn} id='warn' style={{display: requestStatus?'none':'block'}}>
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
                        {
                            data.map((cat) => (
                                <tr key={cat.id}>
                                    <td>{cat.name}</td>
                                    <td>{cat.age}</td>
                                    <td>{cat.gender}</td>
                                    <button onClick={() => deleteCat(cat.id)}><img src={trashImg} /></button>
                                    <button onClick={() => showEditForm(cat)}><img src={pencilImg} /></button>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

                {/* Renderiza o EditBox se um gato estiver selecionado */}
                {selectedCat && <EditBox cat={selectedCat} closeComponent={closeEditForm} updates={updateMethod} />}

            </div>

        </section>
    );
}