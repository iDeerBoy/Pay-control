import Navigation from "../Navigation";
import UserCard from "../UserCard";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <section className={styles.MainMenu}>
      <div className={styles.MainMenu__title}>
        <span>pay</span>
        <span>control</span>
      </div>
      <UserCard />
      <Navigation />
      <footer>
        By: Jimmy puldio || web UI ||{" "}
        <a href="https://github.com/iDeerBoy?tab=repositories" target="_blank" rel="noreferrer">
          github
        </a>
      </footer>
    </section>
  );
};

export default MainMenu;
