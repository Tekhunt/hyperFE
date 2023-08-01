import { useState, useContext } from "react";
// import AuthContext from "../context/AuthContext";
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RegisterWrapper, HeaderWrapper, RegBody } from "./RegisterStyles";
import registerAvatar from "../../assets/images/Avatar.png";
import shop from "../../assets/icons/shop.svg";
import icon3 from "../../assets/icons/icon3.svg";
import fb1 from "../../assets/icons/fb1.svg";
import twitter1 from "../../assets/icons/twitter1.svg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [is_om, setOM] = useState(false);
  const [is_intern, setIntern] = useState(false);
  const [profile_image, setProfileImage] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(
      email,
      password,
      first_name,
      last_name,
      is_om,
      is_intern,
      profile_image
    );
  };

  const imageStyle = {
    width: '150px', // Set the desired width here (e.g., '200px')
    height: 'auto', // 'auto' will maintain the original aspect ratio
  };

  return (
    <RegisterWrapper>
      <HeaderWrapper>
        <div>
        <Link to="/">
            <img src='https://bitnine.net/wp-content/uploads/2021/02/b_logo.png' style={imageStyle} alt="logo" />
          </Link>
        </div>
        <div>
          <button>Login</button>
        </div>
      </HeaderWrapper>

      <RegBody>
        <div className="prompt">
          <h3>
            Create an <span>account</span>
          </h3>
          <div className="avatar-container">
            <img src={registerAvatar} alt="prompt" />
          </div>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
        <div className="action">
          <div className="head">
            <h3>Create account with</h3>
          </div>
          <div className="icons-wrapper">
            <div>
              {" "}
              <img src={icon3} alt="shopNow" />
            </div>
            <div className="opaque">
              {" "}
              <img src={fb1} alt="riteNow" />
            </div>
            <div className="opaque">
              {" "}
              <img src={twitter1} alt="riteNow" />
            </div>
          </div>
          <p className="or">Or</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Enter first name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter first name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Confirm password</label>
              <input
                type="password"
                name="password"
                placeholder="Confirm password"
              />
            </div>
            <div className="input-conr">
              <label>OM (Operations Manager)</label>
              <input
                type="checkbox"
                name="is_om"
                checked={is_om}
                onChange={() => setOM(!is_om)}
              />
            </div>
            <div className="input-conr">
              <label>Intern</label>
              <input
                type="checkbox"
                name="is_intern"
                checked={is_intern}
                onChange={() => setIntern(!is_intern)}
              />
            </div>
            <div className="input-container">
              <label>Profile Image</label>
              <input
                type="text"
                name="profile_image"
                placeholder="Profile Image URl"
                value={profile_image}
                onChange={(e) => setProfileImage(e.target.value)}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
      </RegBody>
    </RegisterWrapper>
  );
}

export default Register;
