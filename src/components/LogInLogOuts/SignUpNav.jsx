import { ReactComponent as CartLogo } from "../../SVG/CartLogoIcon.svg";
import styles from "../CartComponents/CartNavbar.module.css";
import { useNavigate } from "react-router-dom";

export const SignNavbar = () => {
  const history = useNavigate();

  return (
    <div className={styles.root}>
      <div onClick={() => history("/")} className={styles.logo}>
        <CartLogo />
      </div>
      <ul className={styles.list}></ul>
    </div>
  );
};
