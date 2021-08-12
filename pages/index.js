import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Post } from "../src/models";
import { withSSRContext } from "aws-amplify";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Link href={"/second"}>
        <a>Go to second</a>
      </Link>
    </div>
  );
}
