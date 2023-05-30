import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const [toastError, setToastError] = useState(false);
    const onHandleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: userName
        }
        if (userName) {
            const token = JSON.parse(localStorage.getItem("token"))
            axios({
                url: "http://192.168.1.134:9000/forgotPassword",
                method: "post",
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            })
                .then((res) => {
                    console.log(res)
                    if (res?.data?.success == true) {
                        setToastError(false)
                        toast.success(res?.data?.message)
                        setTimeout(() => {
                            navigate("/")
                        }, 2000);
                    }
                    else {
                        setToastError(true)
                        toast.error(res?.data?.message)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }

        else {
            setToastError(true)
            toast.error("please enter username")
        }
    }
    return (
        <div>
            <div className="ct_main_bg">

                <div className="container-fluid">
                    <div className="ct_login_bg ct_width_400">
                        <form>
                            <div className="ct_header  text-center">
                                <h4 className='ct_font_18'>Reset Password</h4>
                                <p>
                                    We'll email you instructions to reset your password.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-4 mb-md-0">
                                    <div className="ct_right_form border-0 ps-0 ms-0" >
                                        <div className="form-group">
                                            <label for="username" className="ct_label">Username</label>
                                            <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        {/* submitDisabled */}
                                        <div className='text-center'>
                                        <input class="btn ct_submit_btn mt-2 disableed mx-auto" onClick={(event) => onHandleSubmit(event)} id="submit" name="submit" type="submit" value="Reset Password" disabled=""></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-footer mt-4 text-sm text-center">
                                <a href="/" title="Forgot username?" data-qa-forgot-username="">
                                    Login </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer className={toastError == true ? "ct_toast_error" : ""} />
        </div>
    )
}

export default ForgotPassword
