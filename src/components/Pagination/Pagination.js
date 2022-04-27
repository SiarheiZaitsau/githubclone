import { ReactComponent as PrevIcon } from "../../images/prevIcon.svg";
import { ReactComponent as NextIcon } from "../../images/nextIcon.svg";
import styles from "./Pagination.module.scss";
import cn from "classnames";
function Pagination(props) {
  const {
    reposNumber,
    currentPage,
    reposPerPage,
    numberOfPages,
    changePage,
    increasePage,
    decreasePage,
  } = props;

  return (
    <>
      {numberOfPages > 1 && (
        <div className={styles.pagination}>
          <p className={styles.paginationText}>
            {currentPage !== numberOfPages
              ? `${currentPage * reposPerPage - reposPerPage + 1}-${
                  currentPage * reposPerPage
                } of ${reposNumber} items`
              : `${
                  currentPage * reposPerPage - reposPerPage + 1
                }-${reposNumber} of ${reposNumber} items`}
          </p>
          <PrevIcon
            onClick={() => {
              if (currentPage !== 1) {
                decreasePage();
              }
            }}
            className={cn(styles.paginationIcon, styles.prevIcon)}
          />
          {currentPage === 1 || (
            <button
              value={1}
              className={styles.paginationButton}
              onClick={(e) => {
                changePage(e);
              }}
            >
              1
            </button>
          )}
          {currentPage > 3 && (
            <button
              className={cn(styles.paginationButton, styles.paginationDots)}
            >
              ...
            </button>
          )}
          {currentPage >= 3 && (
            <button
              className={styles.paginationButton}
              value={currentPage - 1}
              onClick={(e) => changePage(e)}
            >
              {currentPage - 1}
            </button>
          )}
          <button className={cn(styles.paginationButton, styles.currentPage)}>
            {currentPage}
          </button>
          {currentPage <= numberOfPages - 2 && (
            <button
              className={styles.paginationButton}
              value={currentPage + 1}
              onClick={(e) => changePage(e)}
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage <= numberOfPages - 3 && (
            <button
              className={cn(styles.paginationButton, styles.paginationDots)}
            >
              ...
            </button>
          )}
          {currentPage === numberOfPages || (
            <button
              value={numberOfPages}
              className={styles.paginationButton}
              onClick={(e) => changePage(e)}
            >
              {numberOfPages}
            </button>
          )}
          <NextIcon
            onClick={() => {
              if (currentPage !== numberOfPages) {
                increasePage(currentPage + 1);
              }
            }}
            className={cn(styles.paginationIcon, styles.nextIcon)}
          />
        </div>
      )}
    </>
  );
}

export default Pagination;
