import Head from 'next/head';
import styles from '../../styles/home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>DevNews | Home</title>
            </Head>
            <h1 className={styles.title}>
                Hello&nbsp;<span>World!</span>
            </h1>
        </>
    );
}
