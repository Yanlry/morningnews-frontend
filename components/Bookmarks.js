import { useSelector } from 'react-redux';
import Head from 'next/head';
import Article from './Article';
import styles from '../styles/Bookmarks.module.css';

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);

  let articles = <p>No article</p>;
  if (bookmarks.length > 0) {
    articles = bookmarks.map((data, i) => {
      return <Article key={i} inBookmarks={true} {...data} isBookmarked />;
    });
  }

  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <div className={styles.articlesContainer}>
          {articles}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
