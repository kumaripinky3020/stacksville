import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
const OtpCheck = () => {
  const [otp, setOtp] = useState();
  const [toastError, setToastError] = useState(false);
  const navigate = useNavigate();

  const onHandleOtpCheck = () => {
    const phone = JSON.parse(localStorage.getItem("mobile_number"));
    const data = {
      phone_number: phone,
      code: otp
    }
    if (phone && otp) {
      const token = JSON.parse(localStorage.getItem("token"))
      axios({
        url: "http://192.168.1.134:9000/phone_code_verification",
        method: "POST",
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: data
      })
        .then((res) => {
          console.log(res)
          if (res?.data?.success == true) {
            setToastError(false)
            toast.success(res?.data?.message)
            localStorage.setItem("token", JSON.stringify(res?.data?.token))
            setTimeout(() => {
              window.location.href = "/"
            }, 3000)
          }
          else {
            setToastError(true);
            toast.error(res?.data?.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      setToastError(true)
      toast.error(" Please Fill The Otp")
    }
  }
  const onHandleOtpChange = (e) =>{
    setOtp(e)
  }

  return (
    <div className=' my-0'>
      <div className="ct_otp_main_div">
        <div className='ct_logo_text'>
          <h1>STACKSVILLE</h1>
        </div>
        <div className="ct_otp_head">
          <h4>OTP Verification</h4>
          <p>An OTP has been sent you your mobile number.please verify it below</p>
        </div>
        <div className="ct_inputfield">
          <form>
            <div className="otpContainer">
              <OtpInput className="ct_input_flex"
                value={otp}
                onChange={(e)=>onHandleOtpChange(e)}
                numInputs={4}

                renderInput={(props) => <input {...props} />}
              />
            </div>
          </form>
        </div>
        <div className="ct_opt_resend">
          <p>Didn't Recieve OTP <a href="/mobile/login">Resend OTP</a></p>
        </div>
        <div className="text-center">
          <button id="ct_otpsubmit " className='ct_submit_btn' onClick={onHandleOtpCheck}>Submit</button>
        </div>
      </div>
      <ToastContainer className={toastError == true ? "ct_toast_error" : ""} />
    </div>
  )
}
export default OtpCheck