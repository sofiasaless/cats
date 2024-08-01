import styles from './Register.module.css';
import gtx_reg from '../../../public/images/logo-register.png';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { useState } from 'react';
import axios from 'axios';

export default function Register () {
    
    const [ name, setName ] = useState(''); 
    const [ age, setAge ] = useState(''); 
    const [ gender, setGender ] = useState('Macho'); 

    function cadastre (e) {
        e.preventDefault();
        
        const cat = {
            name: name,
            age: age,
            gender: gender
        };

        axios.post('https://cats-api-phsr.onrender.com/cats/save', cat)
        .then(response => {
            alert('Gatuxo cadastrado com sucesso!');
        })
        .catch((error) => {
            console.log('Ocorreu um erro: ' + error);
        });
    }

    
    return (
        <>
           <Header/> 
           <Container>

            {
                <section className={styles.content}>
                    <form onSubmit={cadastre}>
                        <div>
                            <img src={gtx_reg} alt="" />
                        </div>
                        <h2>Preencha os campos</h2>
                        <label htmlFor="name">Nome do gatinho:</label>
                        <input type="text" maxLength={20} name='name' onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="age">Idade do gatinho:</label>
                        <input type="number"min={0} maxLength={20} name='age' onChange={(e) => setAge(e.target.value)} />

                        <label htmlFor="gender">Gênero:</label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                            <option value="Macho">Macho</option>
                            <option value="Femea">Fêmea</option>
                        </select>

                        <button type='submit'>Cadastrar gatinho</button>
                    </form>
                </section>
            }
           
           </Container>
        </>
    );    
}