import styles from "./Container.module.scss";
import cn from "classnames";
function Container(props) {
  const { className, children } = props;
  return <div className={cn(styles.widthContainer, className)}>{children}</div>;
}

export default Container;
