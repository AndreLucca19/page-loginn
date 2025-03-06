import styles from "../styles/Imput.module.css";
import { useRouter } from 'next/router';

export default function imput() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/Conteudo'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Registrar-se</h1>
                    <label className={styles.email}>Email:</label>
                    <input className={styles.input1} type="text" />
                    <label className={styles.senha}>Senha:</label>
                    <input className={styles.input2} type="text" />
                    <button className={styles.button} type="submit">Registrar-se</button>
                </form>
            </div>
        </div>
    );
}