
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Auth() {
  const [account, setaccount] = useState([]);
  const [roles, setroles] = useState([]);
  const [auth, setauth] = useState([]);
  useEffect(() => {
    const getAccount = async () => {
      const { data } = await axios.get("http://localhost:8080/accounts/getall?admin=true")
      setaccount(data)
      const res = await axios.get("http://localhost:8080/roles")
      setroles(res.data)
      const res1 = await axios.get("http://localhost:8080/authorizing/getall?admin=true")
      setauth(res1.data)
    }
    getAccount();
  }, []);
  const checked = (user, roles) => {
    if (auth) {
      return auth.find(value => value.account.username == user && value.roles.id == roles)
    }
  }
  console.log();
  return (
    <div>
      <div className="col-6 offset-2 mt-5  p-2 px-md-5   " >
        <div className="btn-group mb-3">
          <h2>Quản lý quyền</h2>
        </div>
        <table className=" table table-hover ">
          <thead>
            <tr>
              <th scope="col">Full name</th>
              {roles.map((value, key) => (
                <th key={key} scope="col">{value.id}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {
              account.map((value, key) => (
                <tr key={key}>
                  <td>{value.fullname}</td>
                  {roles.map((roles, index) => (
                    <th><input type="checkbox" checked={checked(value.username, roles.id)} /></th>
                  ))}

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
