import styles from "./UserInfo.module.scss";
import { ReactComponent as FollowersIcon } from "../../images/buddies.svg";
import { ReactComponent as FollowingIcon } from "../../images/person_24px.svg";

function UserInfo(props) {
  const { user, reduceToThousands } = props;
  return (
    <div className={styles.userInfo}>
      <img
        className={styles.userAvatar}
        src={user.avatar_url}
        alt="user_avatar"
      />
      <h3 className={styles.userName}>
        {user.name} {user.surname}
      </h3>
      <a
        className={styles.userLink}
        target="_blank"
        href={user.html_url}
        rel="noreferrer"
      >
        {user.login}
      </a>
      <div className={styles.userActivity}>
        <div className={styles.userFollowers}>
          <FollowersIcon className={styles.followersIcon} />
          <p className={styles.followersText}>
            {reduceToThousands(user.followers)} followers
          </p>
        </div>
        <div className={styles.userFollowing}>
          <FollowingIcon className={styles.followersIcon} />
          <p className={styles.followersText}>{user.following} following</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
