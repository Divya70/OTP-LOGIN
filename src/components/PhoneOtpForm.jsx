import { useState } from "react";

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
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
