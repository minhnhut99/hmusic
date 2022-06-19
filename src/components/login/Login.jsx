import { Box, Button } from "@mui/material";
import "./Login.scss";
import Logo from "../../images/hMusic.png";
import { loginUrl } from "../../services/auth";
const Login = () => {
  return (
    <div className="login">
      <Box className="login-wrapper">
        <img src={Logo} alt="logo" />
        <a href={loginUrl} className="btn-login" alt="login URL">
          Login
        </a>
      </Box>
    </div>
  );
};

export default Login;
