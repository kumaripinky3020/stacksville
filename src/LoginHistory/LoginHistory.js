import Style from "../Style/Style.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import moment from 'moment'

export default function LoginHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))
    axios({
      url: "http://192.168.1.134:9000/Get_login_History",
      mehtod: "Get",
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        "Authorization": `Bearer ${token}`
      },
    })
      .then((res) => {
        console.log(res)
        setData(res?.data?.history)
      }
      )
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <>
    {/* <div class="row mt-5"> */}
    <p class="mb-4">Logins across all users on your account over the last 90 days.</p>
    {/* <div class="col-md-12 mb-4"> */}
    <div class="ct_white-box h-auto">
      <div class="p-0">
        <div class="table-responsive">
          <table class="table ct_table_bg table-bordered mb-0">
            <thead>
              <tr>
                <th>
                  Date
                </th>
                <th>
                  Username
                </th>
                <th>
                  IP
                </th>
                <th>
                  Permission Level
                </th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ob) => <tr>
                {console.log(ob)}
                <td>{moment(ob?.login_time).format("YYYY/MM/DD h:mm")}</td>
                <td>{ob?.username}</td>
                <td>{ob?.user_id}</td>
                <td>{ob?.permission_level}</td>
                <td>{ob?.status}</td>
              </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>
    </div>
  </>
}
