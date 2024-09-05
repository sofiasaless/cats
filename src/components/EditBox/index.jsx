import { useState } from 'react';
import styles from './EditBox.module.css';
import MessageBox from '../MessageBox';
import axios from 'axios';

export default function EditBox ( { cat, closeComponent } ) {
    
    const [ name, setName ] = useState(cat.name); 
    const [ age, setAge ] = useState(cat.age); 
    const [ gender, setGender ] = useState(cat.gender);

    const upCat = {
        id: cat.id,
        name:name,
        age:age,
        gender:gender
    }
    
    const closeMessageBox = () => {
        setShowBox(null);
        closeComponent();
    };

    // moving the update method 
    const updateCat = () => {

        axios.put('https://newcats.onrender.com/cats/update', upCat)
        .then((resp) => {
            setShowBox(true);
            setBoxMessage("Gatuxo atualizado com sucesso!")
            // inserts confirmation messageBox after the axios confirmation 
        })
        .catch((error) => {
            // inserts some alert message on messageBox after the axios catch
            setShowBox(true);
            setBoxMessage("Ocorreu um erro ao atualizar o gatuxo :("); 
        })
    }


    const [ showBox, setShowBox] = useState(null)
    const [ boxMessage, setBoxMessage ] = useState('');

    return (
        <div className={styles.container_update} >
            <div className={styles.editform}>
                <div>
                    <span onClick={closeComponent}>&times;</span>
                    <h3>Atualize as informações do Gatuxo</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        updateCat();
                        // closeComponent();
                    }}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id='name' required defaultValue={cat.name} onChange={(e) => setName(e.target.value)}  />

                        <label htmlFor="age">Idade:</label>
                        <input type="number" min={0} max={20} id='age' required defaultValue={cat.age} onChange={(e) => setAge(e.target.value)} />

                        <label htmlFor="gender">Gênero:</label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                            <option value="Macho">Macho</option>
                            <option value="Femea">Fêmea</option>
                        </select>

                        <button type='submit'>Atualizar</button>
                    </form>
                </div>

                { showBox && <MessageBox message={boxMessage} excludeState={false} closeComponent={closeMessageBox} action={null} /> }
            
            </div>


        </div>
    );
}
