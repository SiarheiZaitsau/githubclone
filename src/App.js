import { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import styles from "./App.module.scss";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import { url } from "./constants/index";
function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userError, setUserError] = useState("");

  const getUserData = async (username) => {
    try {
      setIsLoading(true);
      const userData = await axios.get(`${url}${username}`);
      setUserData(userData.data);
      setUserError("");
    } catch (error) {
      // handleError
      setUserData(null);
      setUserError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.App}>
      <Header onSearchUser={getUserData} />
      {isLoading && <Loader className={styles.loader} />}
      {!isLoading && <Content userData={userData} userError={userError} />}
    </div>
  );
}

export default App;
