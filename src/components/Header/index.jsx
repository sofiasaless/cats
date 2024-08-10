import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cadastrar">Cadastrar</Link>
                <Link to="/visualizar">Visualizar</Link>
            </nav>
            <div>
                <Link to="/sobre" className={styles.about}>Sobre</Link>
            </div>
        </header>
    );
}