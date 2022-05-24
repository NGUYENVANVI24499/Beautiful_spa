import React from 'react'

const Model = ({handleFrom}) => {
return (
<div  className="modal">
  <div className="modal-content">
    <span className="close" onClick={handleFrom}>&times;</span>
      <form action="#" method="post">
        <div className="title-content">Hồ sơ ứng tuyển Fresher</div>
          <div className="content">
            <div className="big-label">Thông tin liên hệ</div>
            <div className='row'>
              <div className="form-group">
                <div className="normal-label">Họ và tên <span className="col_ff0000bold">*</span></div>
                <input className="form-control" placeholder="Họ và tên" />
                <p className="text-small-below">(Họ và tên phải chính xác)</p>
                <div className="clear"></div>
              </div>

              <div className="form-group">
                <div className="normal-label">Ngày sinh <span className="col_ff0000bold">*</span></div>
                <input className="form-control" placeholder="Ngày sinh" />
              </div>
            </div>
      

         
        </div>
      </form>
    
  </div>
</div>
)
}

export default Model