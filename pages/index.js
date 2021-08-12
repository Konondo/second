import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Post } from "../src/models";
import { withSSRContext } from "aws-amplify";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <div>{props.date}</div>
      <ul>
        {JSON.parse(props.posts).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(req) {
  const date = new Date().toString();
  const { DataStore } = withSSRContext(req);
  const models = await DataStore.query(Post);

  return {
    props: { date: date, posts: JSON.stringify(models) },
    revalidate: 10,
  };
}
