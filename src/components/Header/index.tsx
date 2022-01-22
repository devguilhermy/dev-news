import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image
                    src="/assets/images/logo.svg"
                    alt="Dev_News logo"
                    width="100%"
                    height="24px"
                />
                <nav>
                    <a href="/" className={styles.active}>
                        Home
                    </a>
                    <a href="/" className={''}>
                        Blog
                    </a>
                </nav>
            </div>
        </header>
    );
}
