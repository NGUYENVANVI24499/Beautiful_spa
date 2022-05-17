 import React from 'react'



import SliderData from '../assets/fake_data/slider'



import Slider from '../conponents/Slider'

import Taiapp from '../conponents/Taiapp'
import BgRealistic from '../conponents/BgRealistic'
import Product from '../conponents/Product'
import Service from '../conponents/Service'

// data hình ảnh thực tế
import treatmentsData from '../assets/fake_data/BgRealistic'

const Home = () => {

  //dich vu noi bat  Service__card

  // const[type, setType] = useState(0)
 
  // const Index = servicecontent.findIndex(e => e.id_service === type)
  
  //hiển thị dữ liệu của 4 button của hình ảnh thực tế
  const getAllbtntreatments = treatmentsData.getAllbtntreatments
   //hiển thị dữ liệu của hình ảnh thực tế 
   const getAlltreatments =treatmentsData.getAlltreatments
   //const gettreatment = treatmentsData.gettreatment
  



  return (
    
   
    <>
      {/* begin slider */}
        <Slider 
          data={SliderData}
          control = {true}
          auto = {true}
          timeOut = {2000}
        />

      {/* end slider */}

      {/* begin DỊCH VỤ NỔI BẬT */}
      <div className="container">
      <section className='Service'>
        <Service />

      </section>
        </div>
      {/* end DỊCH VỤ NỔI BẬT */}
      {/* begin TIỆN TÍCH APP */}
      <section className="taiapp">
        <div className="container">
          <Taiapp />
        </div>
      </section>
      {/* end TIỆN TÍCH APP */}

      {/* begin HÌNH ẢNH THỰC TẾ */}
      <section className="BgRealistic">
        <div className="container">
          <div className="BgRealistic__container">
          <div className="BgRealistic__title">
              HÌNH ẢNH THỰC TẾ
          </div>
          <div className="BgRealistic__desp">
              Cảm nhận sự khác biệt khi đến với hệ thống làm đẹp hàng đầu SeoulSpa.vn.
          </div>
            
            <BgRealistic 
              // hiển thị dữ liệu của 4 btn
                button = {getAllbtntreatments}
                content = {getAlltreatments}
                numberBtn = {2}
               // numberContent ={5}
            
            />
          </div>
        </div> 
      </section>
      {/* begin HÌNH ẢNH THỰC TẾ */}

      {/* begin sản phẩm nổi bật */}
      <section className="Product">
        <div className="container">
          <Product />
        </div>
      </section>
      {/* end sản phẩm nổi bật */}

    </>
  )
}

export default Home