import styles from "./Header.module.scss";
import Logo from "../../images/logo.svg";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import Container from "../Container/Container";
import useEffect from "react";
function Header(props) {
  const { submit } = props;
  return (
    <div className={styles.headerContainer}>
      <Container className={styles.widthContainer}>
        <img className={styles.logo} src={Logo} alt="React Logo" />
        <div className={styles.headerInputContainer}>
          <label className={styles.headerSearchLabel} htmlFor="search">
            <SearchIcon />
          </label>
          <input
            onKeyPress={(e) => e.key === "Enter" && submit(e.target.value)}
            id="search"
            className={styles.headerSearch}
          />
        </div>
      </Container>
    </div>
  );
}

export default Header;
