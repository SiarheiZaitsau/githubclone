import styles from "./Home.module.scss";
import SearchIcon from "../../images/search_large.svg";
import userIcon from "../../images/buddy.svg";
import Repo from "../Repo/Repo";
import Container from "../Container/Container";
import { useState } from "react";

function Home(props) {
  const { repos, userData, userError, repoError } = props;
  const isEmptyObj = (obj) => {
    for (var i in obj) return false;
    return true;
  };
  return (
    <div className={styles.homeContainer}>
      <Container className={styles.widthContainer}>
        {isEmptyObj(userData) && !userError && !repoError && (
          <div className={styles.emptyContainer}>
            <img src={SearchIcon} alt="search" className={styles.searchIcon} />
            <p className={styles.emptyText}>
              Start with searching a GitHub user
            </p>
          </div>
        )}
        {userError && (
          <div className={styles.emptyContainer}>
            <img src={userIcon} alt="user" className={styles.userIcon} />
            <p className={styles.notFoundText}>User not found</p>
          </div>
        )}
        {!isEmptyObj(userData) && <Repo user={userData} repos={repos} />}
      </Container>
    </div>
  );
}

export default Home;
