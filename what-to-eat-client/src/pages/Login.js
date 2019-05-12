import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <img src={process.env.PUBLIC_URL + "/img/food.jpg"} width="100%" height="100%" alt=""/>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">ยินดีต้อนรับจ้า!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="กรุณากรอกอีเมล"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="กรุณากรอกรหัสผ่าน"/>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                          เข้าสู่ระบบ
                        </a>
                        <hr/>
                      </form>
                      <div className="text-center">
                        <Link className="small" to="register">สร้างบัญชี!</Link>
                        <br/>
                        <Link className="small" to="/">&larr; กลับไปหน้าหลัก</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
