import { ReactComponent as PrevIcon } from "../../images/prevIcon.svg";
import styles from "./Pagination.module.scss";
import cn from "classnames";

function Pagination(props) {
  const { reposAmount, currentPage, reposPerPage, numberOfPages, changePage } =
    props;
  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;
  const ThisPageEnds = currentPage * reposPerPage;
  const thisPageStart = ThisPageEnds - reposPerPage + 1;
  if (numberOfPages < 2) {
    return null;
  }
  return (
    <div className={styles.pagination}>
      <p className={styles.text}>
        {currentPage !== numberOfPages &&
          `${thisPageStart}-${ThisPageEnds} of ${reposAmount} items`}
        {thisPageStart === numberOfPages &&
          `${thisPageStart} of ${reposAmount} items`}
        {currentPage === numberOfPages &&
          `${thisPageStart}-${reposAmount} of ${reposAmount} items`}
      </p>
      <button
        onClick={() => changePage(previousPage)}
        disabled={currentPage === 1}
        className={styles.changePageButton}
      >
        <PrevIcon className={cn(styles.icon, styles.prevIcon)} />
      </button>
      {currentPage !== 1 && (
        <button className={styles.button} onClick={() => changePage(1)}>
          1
        </button>
      )}
      {currentPage > 3 && (
        <button className={cn(styles.button, styles.dots)}>...</button>
      )}
      {currentPage >= 3 && (
        <button
          className={styles.button}
          onClick={() => changePage(previousPage)}
        >
          {previousPage}
        </button>
      )}
      <button className={cn(styles.button, styles.currentPage)}>
        {currentPage}
      </button>
      {currentPage <= numberOfPages - 2 && (
        <button className={styles.button} onClick={() => changePage(nextPage)}>
          {nextPage}
        </button>
      )}
      {currentPage <= numberOfPages - 3 && (
        <button className={cn(styles.button, styles.dots)}>...</button>
      )}
      {!(currentPage === numberOfPages) && (
        <button
          className={styles.button}
          onClick={() => changePage(numberOfPages)}
        >
          {numberOfPages}
        </button>
      )}
      <button
        onClick={() => changePage(nextPage)}
        disabled={currentPage === numberOfPages}
        className={styles.changePageButton}
      >
        <PrevIcon className={cn(styles.icon, styles.nextIcon)} />
      </button>
    </div>
  );
}

export default Pagination;
