import React from 'react';
import styles from "./LeftTop.module.scss"
import Link from 'next/link';

const LeftTop = () => {
  return (
    <div className={styles.componentWrapper}>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.linkWrapper}>Home</div>
      </Link>
      <Link href={"/artist"} style={{ textDecoration: "none" }}>
        <div className={styles.linkWrapper}>Artist</div>
      </Link>
      <Link href={"/album"} style={{ textDecoration: "none" }}>
        <div className={styles.linkWrapper}>Album</div>
      </Link>
      <Link href={"/search"} style={{ textDecoration: "none" }}>
        <div className={styles.linkWrapper}>Search</div>
      </Link>
    </div>
  );
}

export default LeftTop