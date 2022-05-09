import styles from "./Header.module.scss";
import Logo from "../../images/logo.svg";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import cn from "classnames";

function Header(props) {
  const { onSearchUser } = props;
  const onSubmit = (e) => {
    e.key === "Enter" && onSearchUser(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={cn("container", styles.widthContainer)}>
        <img className={styles.logo} src={Logo} alt="React Logo" />
        <div className={styles.inputContainer}>
          <label className={styles.searchLabel} htmlFor="search">
            <SearchIcon />
          </label>
          <input onKeyPress={onSubmit} id="search" className={styles.search} />
        </div>
      </div>
    </div>
  );
}

export default Header;
