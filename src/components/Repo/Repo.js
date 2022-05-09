import styles from "./Repo.module.scss";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import RepoCard from "../RepoCard/RepoCard";
import { url } from "../../constants/index";
import Loader from "../Loader/Loader";
import InfoMessage from "../InfoMessage/InfoMessage";
import { REPOS_PER_PAGE } from "../../constants/index";
import EmptyIcon from "../../images/empty.svg";

function Repo(props) {
  const { user } = props;
  const [repos, setRepos] = useState([]);
  const [reposError, setReposError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const reposAmount = user?.public_repos;
  const numberOfPages = Math.ceil(reposAmount / REPOS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const getRepos = useCallback(async () => {
    try {
      setIsLoading(true);
      const userReposData = await axios.get(
        `${url}${user.login}/repos?per_page=4&page=${currentPage}`
      );
      setRepos(userReposData.data);
      setReposError("");
    } catch (error) {
      setRepos(undefined);
      setReposError(error.message);
    }
    setIsLoading(false);
  }, [currentPage, user.login]);

  useEffect(() => {
    getRepos();
  }, [user, getRepos]);

  if (reposError) {
    return <div>{reposError}</div>;
  }
  return (
    <div className={styles.repos}>
      <h2 className={styles.title}>Repositories ({reposAmount})</h2>
      {isLoading && <Loader className={styles.loader} />}
      {!isLoading && user.public_repos < 1 && (
        <InfoMessage text="Repository list is empty" image={EmptyIcon} />
      )}
      {!isLoading &&
        user.public_repos > 1 &&
        repos.map((repo) => {
          return <RepoCard key={repo.id} repo={repo} />;
        })}
      <Pagination
        reposAmount={reposAmount}
        currentPage={currentPage}
        reposPerPage={REPOS_PER_PAGE}
        numberOfPages={numberOfPages}
        changePage={setCurrentPage}
      />
    </div>
  );
}

export default Repo;
