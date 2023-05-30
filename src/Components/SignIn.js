import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toastError, setToastError] = useState(false);
    const navigate = useNavigate();

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
        }
        if (email && password) {
            axios({
                url: "http://192.168.1.134:9000/login",
                method: "post",
                data: data,
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
            })
                .then((res) => {
                    setPassword("");
                    if (res?.data?.success === true) {
                        setToastError(false);
                        toast.success(res?.data?.message)
                        localStorage.setItem("token", JSON.stringify(res?.data.token))
                        localStorage.setItem("user_email", JSON.stringify(res?.data?.user_info?.email))
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 2000);
                    }
                    else{
                        setToastError(true);
                        toast.error(res?.data?.message)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            setToastError(true)
            toast.error("Please fill all field")
        }
    }

    return (
        <div className="App">
            <div className="ct_main_bg">
                <div className="container-fluid">
                    <div className="ct_login_bg">
                        <form>
                            <div className="ct_header">
                                <h4>Welcome!</h4>
                                <p>
                                    We're working on integrating Stacksville. <a href="#">Learn more.</a>
                                </p>

                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_left_form">
                                        <h5>Log in with another provider</h5>
                                        <div>
                                            <a className="ct_custom_btn">
                                                <img src="../github.png" />
                                                Github
                                            </a>
                                            <a className="ct_custom_btn">
                                                <img src="../search.png" />
                                                Google
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_right_form">
                                        <h5>
                                            Log in with Cloud Manager
                                        </h5>
                                        <div className="form-group">
                                            <label for="username" className="ct_label">Username</label>
                                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-2 ">
                                            <label for="password" className="ct_label">Password</label>
                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="d-flex align-items-center gap-2 ct_check_terms" >
                                            <input type="checkbox" />
                                            <label>Trust this device for 30 days</label>
                                        </div>
                                        <div className='ct_login_phone'>
                                            <a href="/mobile/login">Login with phone number</a>
                                        </div>
                                        {/* submitDisabled */}
                                        <input className="btn ct_submit_btn mt-4 disableed " onClick={(event) => onHandleSubmit(event)} id="submit" name="submit" type="submit" value="Log in" disabled=""></input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-footer mt-5 text-sm">
                                <p className="mb-4">Need an account?
                                    <a href="/signup" title="Need an account?" className="ml-1" data-qa-create-account="">Sign up here.</a>
                                </p>
                                Forgot your
                                <a href="/forgot/password" title="Forgot username?" data-qa-forgot-username="">
                                    {" "}password</a>?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer className={toastError == true ? "ct_toast_error ct_toast_width" : "ct_toast_width"} />
        </div>
    )
}

export default SignIn
