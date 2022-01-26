import projectInfo from '../../package.json';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
    appInfo: { name: 'Dev_News React App', version: projectInfo.version },
});
