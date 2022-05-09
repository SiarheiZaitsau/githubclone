import styles from "./Content.module.scss";
import SearchIcon from "../../images/search_large.svg";
import userIcon from "../../images/buddy.svg";
import errorIcon from "../../images/error.svg";
import Repo from "../Repo/Repo";
import InfoMessage from "../InfoMessage/InfoMessage";
import UserInfo from "../UserInfo/UserInfo";
import cn from "classnames";

function Content(props) {
  const { userData, userError } = props;
  const notFound = "Request failed with status code 404";

  if (userError === notFound) {
    return <InfoMessage image={userIcon} text="User not found" />;
  }
  if (userError) {
    return <InfoMessage image={errorIcon} text={userError} />;
  }
  if (!userData) {
    return (
      <InfoMessage
        image={SearchIcon}
        text="Start with searching a GitHub user"
      />
    );
  }
  return (
    <div className={styles.container}>
      <div className={cn(styles.widthContainer, "container")}>
        <UserInfo user={userData} />
        <Repo user={userData} />
      </div>
    </div>
  );
}

export default Content;
