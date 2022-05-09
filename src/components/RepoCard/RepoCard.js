import React from "react";
import styles from "./RepoCard.module.scss";

function RepoCard(props) {
  const { repo } = props;
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className={styles.item}
      rel="noreferrer"
    >
      <div>
        <h4 className={styles.name}>{repo.name} </h4>
        <p className={styles.description}>
          {repo.description || "User didn't add description"}
        </p>
      </div>
    </a>
  );
}

export default RepoCard;
