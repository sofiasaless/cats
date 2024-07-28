import styles from './Register.module.css';
import gtx_reg from '../../../public/images/logo-register.png';

import Header from '../../components/Header';
import Container from '../../components/Container';

export default function Register () {
    return (
        <>
           <Header/> 
           <Container>

            {
                <section className={styles.content}>
                    <form>
                        <div>
                            <img src={gtx_reg} alt="" />
                        </div>
                        <h2>Preencha os campos</h2>
                        <label htmlFor="name">Nome do gatinho:</label>
                        <input type="text" maxLength={20} name='name' />

                        <label htmlFor="age">Idade do gatinho:</label>
                        <input type="number"min={0} maxLength={20} name='age' />

                        <label htmlFor="gender">Gênero:</label>
                        <select name="gender" id="gender">
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