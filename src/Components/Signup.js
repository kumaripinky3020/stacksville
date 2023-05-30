import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [number, setNumber] = useState();

    const onHandleSubmit = (event) => {
        event.preventDefault()
        const data = {
            username: userName,
            password: password,
            email: email,
            phone_number: number
        }
        axios({
            url: "http://192.168.1.134:9000/signUp",
            method: "post",
            data: data,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
            .then((res) => {
                console.log(res)
                setUserName("")
                setPassword("")
                setEmail("")
                setNumber("")
                toast(res?.data?.message)
                if (res?.data?.success === true) {
                    setTimeout(() => {
                        navigate("/")
                    }, 3000);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="ct_main_bg">
            <div className="container-fluid">
               
                <div className="ct_login_bg">
                <h2 className="ct_logo text-center">STACKSVILLE</h2>
                    <form>
                        <div className="ct_header text-center">
                            <h4>Create your account</h4>
                            <p>
                                We're working on integrating Stacksville <a href="#">Learn more.</a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <div className="ct_left_form">
                                    <h5>Sign up using another provider</h5>
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
                                        Sign up with email
                                    </h5>
                                    <div className="form-group">
                                        <label for="username" className="ct_label">Email</label>
                                        <input type="text" required className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="username" className="ct_label">Username</label>
                                        <input type="text" required className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="phonenumber" className="ct_label">Mobile Number</label>
                                        <input type="text" required className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-2 ">
                                        <label for="username" className="ct_label d-block">Password</label>
                                        <div className="ct_pass">
                                            <input type="password" required className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            {/* <div className="ct_pass_eye">
                                                aaa
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* submitDisabled */}
                                    <input class="btn ct_submit_btn mt-2 disableed mx-auto d-block mt-5 " id="submit" name="submit" type="submit" onClick={(event) => onHandleSubmit(event)} value="SignUp" disabled=""></input>
                                </div>
                            </div>
                        </div>
                        <div class="form-footer text-sm text-center mt-5">
                            <p class="mb-4">
                                By providing your email address or using a single sign-on provider to create an account, you agree to our <a href="https://www.linode.com/legal" title="Terms of Service" target="__blank">Terms of Service</a>
                                and that you have reviewed our <a href="https://www.linode.com/legal-privacy" title="Privacy Policy" target="__blank">Privacy Policy</a> and <a href="https://www.linode.com/legal-cookies" title="Cookie Policy" target="__blank">Cookie Policy</a>.
                            </p>
                            <p>
                                Already have an account?
                                <a href="/" title="Log in" data-qa-log-in="">Log in</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup
