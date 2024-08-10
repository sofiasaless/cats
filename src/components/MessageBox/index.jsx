import styles from './MessageBox.module.css';

export default function MessageBox( { message, excludeConfirmation, closeComponent } ) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.intern_content}>
                    <span>{message}</span>

                    <div className={styles.control_btns}>
                        <button className={styles.ok_btn} onClick={closeComponent}>OK</button>
                        {
                            excludeConfirmation
                            ?
                            <button className={styles.cancel_btn} onClick={closeComponent}>Cancelar</button>
                            :
                            ""
                        }
                    </div>
                </div>

            </div>
        </>
    );
}