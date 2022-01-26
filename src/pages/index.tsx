import codingImg from '../assets/images/coding.svg';
import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {
    return (
        <>
            <Head>
                <title>DevNews | Home</title>
            </Head>
            <main className={styles.homeContainer}>
                <section className={styles.homeContent}>
                    <span>👋 Hey, Welcome</span>
                    <h1>
                        News about the <span>programming</span> world
                    </h1>
                    <p>
                        Get access to all publications <br />
                        <span>for $4.90 / month</span>
                    </p>
                    <SubscribeButton />
                </section>
                <Image
                    src={codingImg}
                    alt="Girl coding on laptop on a table with books and a cup of coffee"
                />
            </main>
        </>
    );
}
