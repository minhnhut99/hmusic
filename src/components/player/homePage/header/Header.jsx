import { GrNext, GrPrevious } from "react-icons/gr";
import Logo from "../../../images/hMusic.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="pre-next-ctl">
        x
        <span className="pre">
          <GrPrevious />
        </span>
        <span className="next">
          <GrNext />
        </span>
      </div>
    </div>
  );
};

export default Header;
