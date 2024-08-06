import { useState } from 'react';
import styles from './EditBox.module.css';

export default function EditBox ( { cat, onClose } ) {

    return (
        <div className={styles.container_update} >
            <div className={styles.editform}>
                    <div>
                        <span onClick={onClose}>&times;</span>
                        <h3>Atualize as informações do Gatuxo</h3>
                        <form>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id='name' required defaultValue={cat?.name} />

                            <label htmlFor="age">Idade:</label>
                            <input type="number" min={0} max={20} id='age' required defaultValue={cat?.age} />

                            <label htmlFor="gender">Gênero:</label>
                            <select name="gender" id="gender" defaultValue={cat?.gender} >
                                <option value="Macho">Macho</option>
                                <option value="Femea">Fêmea</option>
                            </select>

                            <button>Atualizar</button>
                        </form>
                    </div>
            </div>
        </div>
    );
}