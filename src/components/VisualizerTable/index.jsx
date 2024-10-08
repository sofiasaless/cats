import styles from './VisualizerTable.module.css';
import gtx_visu from "../../../public/images/logo-list.png";
import trashImg from "../../../public/images/trash-fill.svg";
import pencilImg from "../../../public/images/pencil-square.svg";
import EditBox from '../EditBox';
import { useState } from 'react';
import MessageBox from '../MessageBox';

export default function VisualizerTable ( { data, requestStatus, deleteCat } ) {

    const [selectedCat, setSelectedCat] = useState(null);
    
    const showEditForm = (cat) => {
        setSelectedCat(cat);
    };
    
    const closeEditForm = () => {
        setSelectedCat(null);
    };

    // for excluding cat
    const [ excludeCat, setExcludeCat ] = useState();
    const [ showBox, setShowBox ] = useState(null);
    const [ boxMessage, setBoxMessage ] = useState('');

    const closeMessageBox = () => {
        setShowBox(null);
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
                                    <button onClick={() => {
                                        setExcludeCat(cat.id)
                                        setShowBox(true)
                                        setBoxMessage("Tem certeza que quer excluir o gatuxo?");
                                        // deleteCat(cat.id)
                                    }}><img src={trashImg} /></button>
                                    <button onClick={() => showEditForm(cat)}><img src={pencilImg} /></button>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

                {selectedCat && <EditBox cat={selectedCat} closeComponent={closeEditForm} />}

                {showBox && <MessageBox message={boxMessage} excludeState={excludeCat} closeComponent={closeMessageBox} action={()=>deleteCat(excludeCat)}/>}

            </div>

        </section>
    );
}