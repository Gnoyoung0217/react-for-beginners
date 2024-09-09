import PropTypes from "prop-types"; 
import styles from "./Button.module.css";

function Button({text}) {
    return <button className={styles.btn}>{text}</button>
}

//PropTypes 형식 유효성 체크
//사용하려면 모듈 설치 필요 $npm i prop-types
Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;