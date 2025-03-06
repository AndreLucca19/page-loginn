import styles from "../styles/Conteudo.module.css";
import { useRouter } from 'next/router';

export default function conteudo() {
    const router = useRouter();

    const goBack = () => {
        router.push('/Imput');
    };

    return (
        <div className={styles.conteudo}>
            <h1>Conteúdo</h1>       
            <button className={styles.button} onClick={goBack}>Voltar</button>
        </div>
    );
}