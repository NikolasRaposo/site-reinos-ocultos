import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function LinkButton({ to, text, styleConfig }) {  
  return (    
    <div id='linkdiv' style={styleConfig}>
      <Link className={styles.btn} to={to}>
        {text}
      </Link>
    </div>
  );
}
