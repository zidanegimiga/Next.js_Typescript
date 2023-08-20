import React from "react";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";

const Search = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const router = useRouter();
  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      {router.pathname === "/search" && (
        <div className={styles.navSearchContainer}>
          <input
            className={styles.navSearch}
            placeholder="What do you want to search?"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
