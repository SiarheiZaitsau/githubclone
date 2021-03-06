import styles from "./InfoMessage.module.scss";
import cn from "classnames";

const InfoMessage = (props) => {
  const { image, text, className } = props;
  return (
    <div className={styles.emptyContainer}>
      <img src={image} alt="user" className={cn(styles.userIcon, className)} />
      <p className={styles.notFoundText}>{text}</p>
    </div>
  );
};

export default InfoMessage;
