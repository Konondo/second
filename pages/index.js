import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <div>{props.date}</div>
    </div>
  );
}

export async function getStaticProps() {
  const date = new Date().toString();
  return { props: { date: date }, revalidate: 10 };
}
