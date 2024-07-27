import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.header}>
            <nav>
                <a href="">Início</a>
                <a href="">Cadastrar</a>
                <a href="">Visualizar</a>
            </nav>
            <div>
                <a href="" className={styles.about}>Sobre</a>
            </div>
        </header>
    );
}