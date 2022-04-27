import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import styles from "./App.module.scss";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import { url } from "./constants/index";
function App() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userError, setUserError] = useState(undefined);

  const getData = async (username) => {
    try {
      setIsLoading(true);
      const userData = await axios.get(`${url}${username}`);
      setUserData(userData.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setUserError(undefined);
    } catch (error) {
      // handleError
      setIsLoading(false);
      setUserData({});
      setUserError(error.message);
    }
  };

  return (
    <div className={styles.App}>
      <Header submit={getData} />
      {isLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <Home userData={userData} userError={userError} />
      )}
    </div>
  );
}

export default App;
