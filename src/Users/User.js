import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {
  const [user, setUser] = useState([]);
  const [isFlag, setIsFlag] = useState(false);
  const [isuser, setIsUser] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [toastError, setToastError] = useState(false);

  useEffect(() => {
    getAllUserDetail();
  }, [])

  const getAllUserDetail = () => {
    const val = localStorage.getItem("user_email");
    const data = { email: val }
    const token = JSON.parse(localStorage.getItem("token"))
    axios({
      url: "http://192.168.1.134:9000/get_all_users",
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${token}`
      },
      data: data
    })
      .then((res) => {
        console.log(res.data.all_users)
        setUser(res.data.all_users)
      })
      .catch(err => console.log(err))
  }

  const openModal = () => {
    setIsFlag(true);
  }
  const close = () => {
    setIsFlag(false);
  }

  const add = (event) => {
    event.preventDefault()
    const ob = {
      email: email,
      username: isuser,
      phone_number: number,
    }
    if (email && isuser && number) {
      const token = JSON.parse(localStorage.getItem("token"))
      axios({
        url: "http://192.168.1.134:9000/add_user",
        method: "POST",
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          "Authorization": `Bearer ${token}`
        },
        data: ob
      })
        .then((res) => {
          console.log(res)
          if (res?.data?.success == true) {
            setToastError(false);
            toast.success(res.data.message);
            getAllUserDetail()
            close();
          }
          else {
            setToastError(true);
            toast.error(res.data.message)
            close();
          }
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      setToastError(true)
      toast.error("Please fill all field")
    }

  }

  return <>
    <div className="text-end mb-4">
      <button className="ct_custom_btn" onClick={openModal}>Add a User</button>
    </div>
    <div id="ct_modal_div" className={isFlag === true ? "ct_open_modal" : "ct_modal_div"} >
      <div className="ct_payment_main">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="ct_font_22 mb-0">
            Add a User
          </h4>
          <div className="ct_close_modal">
            <div onClick={close} className="bi bi-x">X</div>
          </div>
        </div>
        <div>
          <form action="">
            <div className="label-float mb-2">
              <input value={isuser} onChange={(e) => setIsUser(e.target.value)} type="text" placeholder=" " />
              <label>Username*</label>
            </div>
            <div className="label-float mb-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " />
              <label >Email*</label>
            </div>
            <div className="label-float mb-4">
              <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder=" " />
              <label >Number*</label>
            </div>
            <div className="ct_on_off_text">
              <div className="ct_switch_main">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>
                <span>This user will have full access to account features. This can be changed later.</span>
              </div>
            </div>
            <div className="ct_note_cnt">
              <p className="mb-0">The user will be sent an email to set their password</p>
            </div>
            <div className="ct_modal_footer text-end mt-5">
              <button className="ct_custom_btn" onClick={add}>Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div >
    </div>
    <div className="ct_white-box h-auto">
      <div className="p-0">
        <div className="table-responsive">
          {user ?
            <table className="table ct_table_bg table-bordered mb-0">
              <thead>
                <tr>
                  <th>
                    UserName
                  </th>
                  <th>
                    Emails Address
                  </th>
                  <th>
                    Access
                  </th>
                </tr>
              </thead>
              <tbody>
                {user?.map((ob) => (
                  <tr>
                    <td>{ob?.username}</td>
                    <td>{ob?.email}</td>
                    <td>{ob?.account_access}</td>
                    <td>User Profile</td>
                    <td>User Permission</td>
                    <td>Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
            : " Data not available"}
        </div>
      </div>
      <ToastContainer className={toastError == true ? "ct_toast_error" : ""} />
    </div>

  </>
}