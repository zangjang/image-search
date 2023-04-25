import ImageList from '@domains/image/ImageList';
import ImageSearch from '@domains/image/ImageSearch';
import * as styles from '@styles/home.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <ImageSearch />
      </header>
      <section>
        <ImageList />
      </section>
    </>
  );
}
