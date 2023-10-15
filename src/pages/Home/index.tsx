import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/pages/Home/Home.module.scss';
import { fetchUser, type UserFetchResponse } from '@/services/userService';

export const Home = () => {
  const [userData, setUserData] = React.useState<UserFetchResponse | undefined>();

  React.useEffect(() => {
    fetchUser().then(setUserData);
  }, []);

  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>Fragrant Foul Football Association</h1>
      <h2 className={styles.description}>Hello, Captain!!!</h2>
      <h2 className={styles.description}>
        Head over to the team availability section to know the availability of your respective players
      </h2>
      <p className={styles.description}>Made by Rising Billikens</p>
    </div>
  );
};
