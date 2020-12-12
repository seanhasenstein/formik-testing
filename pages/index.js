import Head from 'next/head';
import TestForm from '../components/TestForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formik Example</title>
      </Head>
      <div className={styles.main}>
        <h1>Formik Test Example</h1>
        <TestForm />
      </div>
    </div>
  );
}
