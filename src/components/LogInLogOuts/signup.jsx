import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/actions";
import CartNavbar from "../CartComponents/CartNavbar";
import "./signup.css";
import { SignNavbar } from "./SignUpNav";

export const Signup = () => {
  let navigate = useNavigate();
  const [number, setNumber] = useState(null);
  const [num, setNum] = useState(null);
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
  const setMobileNumber = () => {
    if (number.toString().length === 10) {
      setNum(number);
      localStorage.setItem("meesho-user-number", JSON.stringify(number));
    } else {
      alert("Number should be of 10 digits");
    }
  };

  console.log(otp);
  const setOtpFunc = () => {
    if (otp) {
      let userNumber = JSON.parse(localStorage.getItem("meesho-user-number"));
      dispatch(logOutUser(userNumber));

      navigate("/");
    }
  };
  return (
    <>
      <SignNavbar />
      <div className="main_container_signup">
        <div>.</div>
        <div className="cont_signup">
          <div id="imgScont">
            <img src="signUpPageImg.jpg" alt="" srcset="" />
          </div>
          {num ? (
            <>
              <div className="input_cont_signUp">
                <div id="userNumber">Enter OTP sent to {num}</div>
                <div>
                  <input
                    type="number"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div>
                  <button id="ver_btn" onClick={setOtpFunc}>
                    Verify
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="input_cont_signUp" id="inCont">
              <div className="txt_head">Sign Up to view your profile</div>
              <div className="inBox_Number">
                <span>
                  <div className="cnty">Country</div>
                  <div className="numb_Si">🇮🇳 +91</div>
                </span>
                <input
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  className="in_box_num"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <button className="btn_otp" onClick={setMobileNumber}>
                Send OTP
              </button>
            </div>
          )}
          <div id="tnC">
            <div className="colGra">By continuing, you agree to Meesho’s </div>
            <div className="colB">
              <span>Terms & Conditions</span> <span className="colGra">&</span>
              <span> Privacy Policy</span>
            </div>
          </div>
        </div>
        <div>.</div>
      </div>
    </>
  );
};
