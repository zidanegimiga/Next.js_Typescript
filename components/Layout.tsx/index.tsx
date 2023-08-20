import React, { useState, useRef } from "react";
import styles from "./Layout.module.scss";
import LeftTop from "../LeftTop";
import { useRouter } from "next/navigation";
import Search from "../Nav";

const Layout = ({ children }: any) => {
    const [middleWidth, setMiddleWidth] = useState<any>();
  const router = useRouter();
  const handleBack = (e: any) => {
    e.preventDefault();
    router.back();
  };
  const handleForward = (e: any) => {
    e.preventDefault();
    router.forward();
  };

  const dividerRef = useRef(null);

  const handleDividerDrag = (e: any) => {
    if (dividerRef.current) {
      const totalWidth = window.innerWidth;
      const newMiddleWidth = (e.clientX / totalWidth) * 3; // Adjust ratio as needed
      setMiddleWidth(newMiddleWidth);
    }
  };

  if (typeof window !== "undefined") {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <LeftTop />
          </div>
          <div className={styles.leftBottom}>LeftBottom</div>
        </div>
        <div
          className={styles.divider}
          ref={dividerRef}
          onMouseDown={(e) => {
            window.addEventListener("mousemove", handleDividerDrag);
            window.addEventListener("mouseup", () => {
              window.removeEventListener("mousemove", handleDividerDrag);
            });
          }}
        ></div>
        <div className={styles.middle}>
          <div className={styles.middleNav}>
            <button className={styles.navButton} onClick={handleBack}>
              &lt;
            </button>
            <button className={styles.navButton} onClick={handleForward}>
              &gt;
            </button>
            <Search />
          </div>
          {children}
        </div>
        <div className={styles.right}>Right</div>
        <div className={styles.footer}>Footer</div>
      </div>
    );
  }
};

export default Layout;
