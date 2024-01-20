import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
const inputRef = useRef([])
useEffect(()=>{
if(inputRef.current[0]){
    inputRef.current[0].focus()
}
},[])
  const onChangeHandler = (index,e) => {
    const value= e.target.value;
    if(isNaN(value))return;
    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length -1)
    setOtp(newOtp)

    // submit Logic
    const combinedOtp = newOtp.join("")
    if(combinedOtp.length ===length)onOtpSubmit(combinedOtp)
    
    // To mover cursor to next if the input field if the current field is filled
    if(value && index < length -1 && inputRef.current[index + 1]){
        inputRef.current[index + 1].focus()
    }
  };

  const onClickHandler = (index) => {
    inputRef.current[index].setSelectionRange(1,1)
    if(index>0 && !otp[index-1]){
        inputRef.current[otp.indexOf("")].focus()
    }
  };
  const onKeyHandler = (e, index) => {
    if(e.key==="Backspace" && !otp[index] && index >0 && inputRef.current[index - 1]){
        inputRef.current[index - 1].focus()
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input)=>(inputRef.current[index]=input)}
            type="text"
            value={value}
            onChange={(e) => onChangeHandler(index, e)}
            onClick={() => onClickHandler(index)}
            onKeyDown={(e) => onKeyHandler(e, index)}
            className="OtpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
