import axios from 'axios';
import { stringify } from 'qs';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

    const MobileLogin = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState({});
    const [toastError, setToastError] = useState(false);
    const OTP = () => {
        const data = {
            phone_number: number
        }
        axios({
            url: "http://192.168.1.134:9000/phone_verification",
            method: "POST",
            data: data,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
            .then((res) => {
                console.log(res?.data?.success)
                localStorage.setItem("mobile_number", JSON.stringify(number));
                if (res?.data?.success == true) {
                    setToastError(false)
                    toast.success("OTP Sent Successfully")
                    setTimeout(() => {
                        navigate("/linodes/otp")
                    }, 3000);
                }
                else {
                    setToastError(true);
                    toast.error("Number is not registered with Stacksville")
                  }
            })
    }
    return (
        <div className='ct_login_bg_color'>
            <div className="ct_otp_main_div">
                <div className='ct_logo_text'>
                    <h1>STACKSVILLE</h1>
                </div>
                <div className="ct_otp_head mb-0 ct_right_form  border-0 ps-0 ms-0">
                    <h4 className='mb-4'>Enter Mobile Number</h4>

                    <div className="form-group mt-0"><label for="Phone Number" className="ct_label">Phone Number</label>
                        <input type="number" maxLength={10} value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" /></div>
                </div>
                <div className='ct_login_option_div' >
                    <p>Don't have account? <a href="/signup">Sign Up</a></p>
                    <p>Login With <a href="/">Username</a></p>
                </div>
                <div className='text-center'>
                    <button className='ct_submit_btn mt-0' onClick={OTP} OTP>Submit</button>
                </div>
            </div>
            <ToastContainer className={toastError == true ? "ct_toast_error" : ""} />
        </div>
    )
}

export default MobileLogin