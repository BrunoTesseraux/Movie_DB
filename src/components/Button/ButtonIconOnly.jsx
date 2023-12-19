import "./Button.scss";
import back from "./../../assets/icons/back.svg";

const ButtonIconOnly = (props) => {
  return (
    <button className="secondary-btn-icon-only">
      <img src={props.icon} alt="" />
    </button>
  );
};

export default ButtonIconOnly;
