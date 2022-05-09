import styles from "./UserFollow.module.scss";
import { reduceToThousands } from "../../constants/index";
import cn from "classnames";

function UserInfo(props) {
  const { number, Icon, text, className } = props;
  return (
    <div className={cn(styles.followers, className)}>
      <Icon className={styles.followersIcon} />
      <p className={styles.followersText}>
        {reduceToThousands(number)} {text}
      </p>
    </div>
  );
}

export default UserInfo;
