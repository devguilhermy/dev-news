import styles from './styles.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export function LoginButton() {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <button type="button" className={styles.loginButton}>
            <FaGithub
                style={{
                    color: 'var(--lime-500)',
                }}
            />
            Guilhermy
            <AiOutlineClose />
        </button>
    ) : (
        <button type="button" className={styles.loginButton}>
            <FaGithub
                style={{
                    color: 'var(--amber-500)',
                }}
            />
            Login with GitHub
        </button>
    );
}
