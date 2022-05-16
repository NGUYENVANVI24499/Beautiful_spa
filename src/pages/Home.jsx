 import React from 'react'



import SliderData from '../assets/fake_data/slider'



import Slider from '../conponents/Slider'

import Taiapp from '../conponents/Taiapp'
import BgRealistic from '../conponents/BgRealistic'
import Product from '../conponents/Product'
import Service from '../conponents/Service'

const Home = () => {

  //dich vu noi bat  Service__card

  // const[type, setType] = useState(0)
 
  // const Index = servicecontent.findIndex(e => e.id_service === type)
  
  


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
          <BgRealistic />
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