import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mañana Co.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Check Back Later!</h1>
        <Image
          style={{ opacity: 0.5 }}
          src="/boards_on_car.jpeg"
          alt="Surfing"
          layout="fill"
          priority
        />
      </main>
    </>
  );
};

export default Home;
