import codingImg from '../assets/images/coding.svg';
import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';
import { SubscribeButton } from '../components/SubscribeButton';

interface HomeProps {
    product: {
        priceId: string;
        amount: string;
    };
}

export default function Home({ product }: HomeProps) {
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
                        <span>for {product.amount} / month</span>
                    </p>
                    <SubscribeButton priceId={product.priceId} />
                </section>
                <Image
                    src={codingImg}
                    alt="Girl coding on laptop on a table with books and a cup of coffee"
                />
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const price = await stripe.prices.retrieve(
        'price_1KMCNoJ4bL7uZ7tCouT5yYkj'
        // { expand: ['product'] }
    );

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price.unit_amount / 100),
    };

    return {
        props: {
            product,
        },
    };
};
