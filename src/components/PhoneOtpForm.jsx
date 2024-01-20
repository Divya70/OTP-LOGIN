import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const onChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpInput(true);
  };
  const onOtpSubmit=(otp)=>{
    console.log("Login Successful", otp)
  }
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter Number"
            onChange={onChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to this {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
