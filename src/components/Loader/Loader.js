import React from "react";
import styles from "./Loader.module.scss";
import cn from "classnames";

function Loader(props) {
  const { className } = props;
  return (
    <div className={cn(styles.ldsHeart, className)}>
      <div></div>
    </div>
  );
}

export default Loader;
