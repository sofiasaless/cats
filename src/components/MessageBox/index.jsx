import styles from './MessageBox.module.css';

export default function MessageBox( { message, excludeState, closeComponent, action } ) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.intern_content}>
                    <h4>{message}</h4>

                    <div className={styles.control_btns}>
                        {/* <button className={styles.ok_btn} onClick={() => {
                            action()
                            closeComponent()
                        }}>OK</button> */}
                        {
                            excludeState
                            ?
                            <>
                                <button className={styles.ok_btn} onClick={() => {
                                action()
                                closeComponent()
                                }}>OK</button>
                                <button className={styles.cancel_btn} onClick={closeComponent}>Cancelar</button>
                            </>
                            :
                            <button className={styles.ok_btn} onClick={closeComponent}>OK</button>
                        }
                    </div>
                </div>

            </div>
        </>
    );
}