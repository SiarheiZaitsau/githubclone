import styles from "./Repo.module.scss";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import RepoCard from "../RepoCard/RepoCard";
import { url } from "../../constants/index";
import UserInfo from "../UserInfo/UserInfo";
import Loader from "../Loader/Loader";
function Repo(props) {
  const { user } = props;
  const [repos, setRepos] = useState([]);
  const [repoError, setRepoError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const reposNumber = user.public_repos;
  const reposPerPage = 4;
  const numberOfPages = Math.ceil(reposNumber / reposPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const reduceToThousands = (num) => {
    if (num > 1000) {
      const res = (num / 1000).toFixed(1);
      return `${res}k`;
    } else {
      return num;
    }
  };
  const getRepoData = useCallback(async () => {
    try {
      const userReposData = await axios.get(
        `${url}${user.login}/repos?per_page=4&page=${currentPage}`
      );

      setRepos(userReposData.data);
      setRepoError(undefined);
    } catch (error) {
      setRepos(undefined);
      setRepoError(error.message);
    }
  }, [currentPage, user.login]);

  useEffect(() => {
    setIsLoading(true);
    getRepoData();
    setTimeout(() => setIsLoading(false), 3000);
  }, [user, getRepoData]);

  const changePage = (e) => {
    setCurrentPage(+e.target.value);
  };

  const increasePage = () => {
    setCurrentPage(currentPage + 1);
  };

  const decreasePage = () => {
    setCurrentPage(currentPage - 1);
  };
  if (repoError) {
    return <div>{repoError}</div>;
  }
  return (
    <div className={styles.repoContainer}>
      <UserInfo reduceToThousands={reduceToThousands} user={user} />
      <div className={styles.repos}>
        <h2 className={styles.reposTitle}>Repositories ({reposNumber})</h2>

        {isLoading ? (
          <Loader className={styles.loader} />
        ) : (
          repos.map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })
        )}

        <Pagination
          reposNumber={reposNumber}
          currentPage={currentPage}
          reposPerPage={reposPerPage}
          numberOfPages={numberOfPages}
          changePage={changePage}
          increasePage={increasePage}
          decreasePage={decreasePage}
        />
      </div>
    </div>
  );
}

export default Repo;
