import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MC Fumes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src={require("../public/assets/img/defumezlogo.jpeg")}
        style={{ width: "350px" }}
      />
      <h1 className={styles.title}>Coming soon...</h1>
    </div>
  );
}
