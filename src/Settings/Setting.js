import { useState } from "react"

export default function Setting()
{
  const[isSetting,setSetting]=useState(false)
    return<div>
   
     <div className="ct_nav_tabs">
           <ul>
       {/* <li>
                <a href="#" className="active">Settings</a>
            </li> */}
           </ul>

       </div>
       <hr className="ct_border_clr"/>


       <div className="row mt-5"/>
          
           <div className="col-md-12 mb-4"/>
            <div className="ct_white-box h-auto"/>
                <div className="accordion ct_custom_accordian" id="accordionExample"/>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Backup Auto Enrollment
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                         <p>This controls whether Linode Backups are enabled, by default, for all Linodes when they are initially created. For each Linode with Backups enabled, your account will be billed the additional hourly rate noted on the 
                            <a href="#" className="ct_link_clr">Backups pricing page.<svg width="19px" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium makeStyles-icon-163 css-6yqi1c-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>
                         </p>

                         <div className="ct_on_off_text mt-4">
                            <div className="ct_switch_main">
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                  </label> 
                            </div>
                              <div>
                                <span>Disabled (Don’t enroll new Linodes in Backups automatically)</span>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Network Helper
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Network Helper automatically deposits a static networking configuration into your Linode at boot.
                              
                             </p>
    
                             <div className="ct_on_off_text mt-4">
                                <div className="ct_switch_main">
                                    <label className="switch">
                                        <input type="checkbox" checked/>
                                        <span className="slider round"></span>
                                      </label> 
                                </div>
                                  <div>
                                    <span>
                                        Enabled (default behavior)</span>
                                  </div>
                              </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Object Storage
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>This controls whether Linode Backups are enabled, by default, for all Linodes when they are initially created. For each Linode with Backups enabled, your account will be billed the additional hourly rate noted on the 
                                <a href="#" className="ct_link_clr">Backups pricing page.<svg width="19px" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium makeStyles-icon-163 css-6yqi1c-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>
                             </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Linode Managed
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                           <p>Linode Managed includes Backups, Longview Pro, cPanel, and round-the-clock monitoring to help keep your systems up and running. +$100/month per Linode. Learn more.</p>
                           <button className="ct_custom_btn mt-2">Add Linode Managed</button>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item"/>
                        <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Close Account
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <button className="ct_custom_btn ">Close Account</button>
                          </div>
                          </div>
                          </div>

                    
}