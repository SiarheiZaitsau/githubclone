import styles from "./Header.module.scss";
import Logo from "../../images/logo.svg";
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

        <label className={styles.searchLabel} htmlFor="search">
          <input onKeyPress={onSubmit} id="search" className={styles.search} />
        </label>
      </div>
    </div>
  );
}

export default Header;
