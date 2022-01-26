import Image from 'next/image';
import logoImg from '../../assets/images/logo.svg';
import styles from './styles.module.scss';
/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image
                    src={logoImg}
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
