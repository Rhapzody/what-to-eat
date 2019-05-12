import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid bg-light pt-5" style={{height:'720px'}} >

        {/* <!-- 404 Error Text --> */}
        <div className="text-center">
          <div className="error mx-auto" data-text="404">404</div>
          <p className="lead text-gray-800 mb-5">ไม่พบหน้าที่ท่านต้องการ</p>
          <Link to="/">&larr; ย้อนกลับไปหน้าแรก</Link>
        </div>

      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  )
}

