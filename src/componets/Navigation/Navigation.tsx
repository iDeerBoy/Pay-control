import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useMatch } from "react-router-dom";


const Navigation = () => {
  
  const isMatch = useMatch
  const isActive = (url: string) => {
    const match = isMatch(url);
    return match ? styles.Navigation__active : "";
  };

  return (
    <nav className={styles.Navigation}>
      <Link to="/" className={isActive("/")}>
        Wallet
      </Link>
      <Link to="/Debts" className={isActive("/Debts")}>
        Debts
      </Link>
    </nav>
  );
};

export default Navigation;