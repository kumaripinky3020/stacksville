import React, { useState } from "react"
import Style from "../Style/Style.css"
import LoginHistory from "../LoginHistory/LoginHistory"
import Setting from "../Settings/Setting"
import User from "../Users/User"
export default function MiddleContainer() {

    const [isLoginHistory, setIsLoginHistory] = useState(false)
    const [isSettingHistory, setisSettingHistory] = useState(false)
    const [isServiceTransfers, setIsServiceTransfers] = useState(false)
    const [isMaintenance, setIsMaintenance] = useState(false)
    const [isSetting, setIsSetting] = useState(false)
    const [isBilling, setIsBilling] = useState(true)


    const [isUser, setIsUser] = useState(false)
    const [isHome, setIsHome] = useState(true)

    const handleSettingClick = (val) => {
        if (val == "Settings") {
            setisSettingHistory(true)
            setIsLoginHistory(false)
            setIsUser(false)
            setIsHome(false)
            setIsBilling(false)
        }
        if (val == "LoginHistory") {
            console.log(val)
            setIsLoginHistory(true)
            setisSettingHistory(false)
            setIsUser(false)
            setIsHome(false)
            setIsBilling(false)
        }
        if (val == "Usergrand") {
            setIsUser(true)
            setisSettingHistory(false)
            setIsHome(false)
            setIsLoginHistory(false)
            setIsBilling(false)
        }
    }

    return <>
        <main id="main" className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ct_font_22">Account</h4>
                    </div>
                    <div className="col-md-6">
                        <div className="ct_right_head">
                            <ul>
                                <li>
                                    <button className="ct_custom_btn">Make a Payment</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="ct_nav_tabs">
                    <ul>
                        <li>
                            <a>Billing Info</a>
                        </li>
                        <li  onClick={() => handleSettingClick("Usergrand")}>
                            <a>Users & Grants</a>
                        </li>
                        <li onClick={() => handleSettingClick("LoginHistory")}>
                            <a >Login History</a>
                        </li>
                        <li onClick={() => handleSettingClick("ServiceTransfer")}>
                            <a>Service Transfers</a>
                        </li >
                        <li onClick={() => handleSettingClick("Maintenance")}>
                            <a >Maintenance</a>
                        </li>
                        <li  onClick={() => handleSettingClick("Settings")}>
                            <a >Settings</a>
                        </li>
                    </ul>

                </div>
                {/* <hr className="ct_border_clr" /> */}

                <div>
                    {isHome === true &&
                        <div className="row mt-5">
                            <div className="col-md-6 mb-4">
                                <div className="ct_white-box">
                                    <div className="ct_head_bg">
                                        <h4 className="ct_font_22"> Account Balance
                                        </h4>
                                    </div>
                                    <div className="ct_flex_item">
                                        <p>You have no balance at this time.
                                        </p>
                                        <h6><strong>$0.00</strong></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="ct_white-box">
                                    <div className="ct_head_bg">
                                        <h4 className="ct_font_22"> Accrued Charges<svg width="19" height="21px" className="ct_svg_white ms-1 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-6yqi1c-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HelpOutlineIcon"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>
                                        </h4>
                                    </div>
                                    <div className="ct_flex_item">
                                        <p>Since last invoice
                                        </p>
                                        <h6><strong>$0.00</strong></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="ct_white-box">
                                    <div className="ct_head_bg">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="ct_font_22"> Billing Contact
                                            </h4>
                                            <button className="ct_trans_btn">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ct_flex_item align-items-start">

                                        <div>
                                            <p className="mb-2"> Kishore Kota
                                            </p>
                                            <p className="mb-2">
                                                10200 Independence Pkwy
                                            </p>
                                            <p className="mb-2">
                                                APT 2216
                                            </p>
                                            <p className="mb-2"> Plano,TX,75025A</p>
                                            <p className="mb-2">United States</p>
                                        </div>
                                        <div>
                                            <p className="mb-2">kishorekumarkota@gmail.com</p>
                                            <p>+13122462247</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="ct_white-box">
                                    <div className="ct_head_bg">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="ct_font_22"> Payment Methods
                                            </h4>
                                            <button className="ct_trans_btn">
                                                Add Payment Method
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ct_padd_15 ct_flex_item justify-content-start gap-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 302"><path fill="#27346A" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765"></path><path fill="#27346A" d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z"></path><path fill="#2790C3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z"></path><path fill="#1F264F" d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"></path></svg>
                                        </div>
                                        <p className="mb-0"><strong>PayPal</strong></p>
                                        <p className="mb-0">info@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mb-4">
                                <div className="ct_white-box">
                                    <div className="ct_head_bg">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="ct_font_22"> Billing & Payment History

                                            </h4>
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="mb-0 text-white">Account active since 2022-11-02</p>
                                                <select name="" id="" className="ct_select_box">
                                                    <option value="">All Transaction Types</option>
                                                    <option value="">Invoices</option>
                                                    <option value="">Payments</option>
                                                </select>
                                                <select name="" id="" className="ct_select_box">
                                                    <option value="">All Time</option>
                                                    <option value="">30 Days</option>
                                                    <option value="">60 Days</option>
                                                    <option value="">90 Days</option>
                                                    <option value="">6 Months</option>
                                                    <option value="">12 Months</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className=" table-responsive">
                                            <table className="table ct_table_bg table-bordered mb-0" >
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Description
                                                        </th>
                                                        <th>
                                                            Date
                                                        </th>
                                                        <th>
                                                            Amount
                                                        </th>
                                                        <th>
                                                            &nbsp;
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Payment #15073763</td>
                                                        <td>2023-05-02 04:42</td>
                                                        <td>$0.03</td>
                                                        <td><a href="#" download="" className="ct_link_btn">Download PDF</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="" className="ct_link_clr">Payment #15073763</a></td>
                                                        <td>2023-05-02 04:42</td>
                                                        <td>$0.03</td>
                                                        <td><a href="#" download="" className="ct_link_btn">Download PDF</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment #15073763</td>
                                                        <td>2023-05-02 04:42</td>
                                                        <td>$0.03</td>
                                                        <td><a href="#" download="" className="ct_link_btn">Download PDF</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment #15073763</td>
                                                        <td>2023-05-02 04:42</td>
                                                        <td>$0.03</td>
                                                        <td><a href="#" download="" className="ct_link_btn">Download PDF</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {isLoginHistory === true &&
                        <LoginHistory />
                    }

                    {isSettingHistory === true &&
                        <Setting />
                    }
                    {
                        isUser === true &&
                        <User />
                    }

                </div>
            </div>
        </main>
    </>
}