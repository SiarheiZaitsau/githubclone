import styles from "./UserInfo.module.scss";
import { ReactComponent as FollowersIcon } from "../../images/buddies.svg";
import { ReactComponent as FollowingIcon } from "../../images/person_24px.svg";
import UserFollow from "../UserFollow/UserFollow";

function UserInfo(props) {
  const { user } = props;
  return (
    <div className={styles.info}>
      <img className={styles.avatar} src={user.avatar_url} alt="user_avatar" />
      <h3 className={styles.name}>
        {user.name} {user.surname}
      </h3>
      <a
        className={styles.link}
        target="_blank"
        href={user.html_url}
        rel="noreferrer"
      >
        {user.login}
      </a>
      <div className={styles.activity}>
        <UserFollow
          Icon={FollowersIcon}
          text="followers"
          number={user.followers}
        />

        <UserFollow
          Icon={FollowingIcon}
          text="following"
          number={user.following}
          className={styles.following}
        />
      </div>
    </div>
  );
}

export default UserInfo;
