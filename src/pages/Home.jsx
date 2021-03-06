 import React from 'react'
  import Helmet from '../conponents/Helmet'



import SliderData from '../assets/fake_data/slider'

import Slider from '../conponents/Home/Slider'

import Taiapp from '../conponents/Home/Taiapp'
import BgRealistic from '../conponents/Home/BgRealistic'
import Product from '../conponents/Home/Product'
import Service from '../conponents/Home/Service'
import DataProducts from '../assets/fake_data/Products'
//import Section, {SectionBody, SectionTitle} from '../conponents/Section'

// data hình ảnh thực tế
import treatmentsData from '../assets/fake_data/BgRealistic'
import Grid from '../conponents/Grid'
import { Link } from 'react-router-dom'

const Home = () => {

  //dich vu noi bat  Service__card

  // const[type, setType] = useState(0)
 
  // const Index = servicecontent.findIndex(e => e.id_service === type)
  
  //hiển thị dữ liệu của button của hình ảnh thực tế
  const getAllbtntreatments = treatmentsData.getAllbtntreatments
   //hiển thị dữ liệu của hình ảnh thực tế 
   const getAlltreatments =treatmentsData.getAlltreatments
   const DataProduct = (count)=>{
      return DataProducts.slice(0, count)
  }
 
  return (
    

    <Helmet title="trang chủ">
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
                //numberBtn không khai báo mặt định lấy tất cả btn
                numberBtn = {4}
                //numberContent không khai báo mặt định lấy tất cả content
                numberContent ={4}
            />
          <div className='BgRealistic__seemore'><Link to={'/categ'}>Xem thêm</Link></div>
          </div>
        </div> 
      </section>
      {/* begin HÌNH ẢNH THỰC TẾ */}

      {/* begin sản phẩm nổi bật */}
      <section className="Product">
        <div className="container">
          <div className="Product__container">
            <div className="Product__title"> SẢN PHẨM NỔI BẬT</div>
            <div className="Product__cards">
              <Grid 
                col= {4}
                mdCol = {3}
                msCol ={2}
                gap = {20}
              >
              {
                DataProduct(4).map((item, index)=>(
                  <Product 
                    key={index}
                    data = {item}
                  />
                ))
              }
              </Grid>
            </div>
            <div>xem thêm</div>
          </div>
        </div>
      </section>
      {/* end sản phẩm nổi bật */}
      <a href='heade'>đđâsdasđsa</a>
    </Helmet>
    
  )
}

export default Home
