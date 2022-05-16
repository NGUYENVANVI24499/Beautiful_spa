 import React, { useState } from 'react'

import {Link} from "react-router-dom";

import SliderData from '../assets/fake_data/slider'
import service from '../assets/fake_data/service'
import servicecontent from '../assets/fake_data/servicecontent'

import Slider from '../conponents/Slider'
import CardService from '../conponents/CardService'
import ContentService from '../conponents/ContentService'
import Taiapp from '../conponents/Taiapp'
import BgRealistic from '../conponents/BgRealistic'

const Home = () => {

  //dich vu noi bat  Service__card

  const[type, setType] = useState(0)
 
  const Index = servicecontent.findIndex(e => e.id_service === type)
  
  


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
        <div className="Service__outstanding">
          <div className="Service__outstanding--title">
            dịch vụ nổi bật
          </div>
          <div className="Service__card">
            {
              service.map((item,index)=>(
                <Link 
                  className={`Service__card__item  ${item.id === type ? 'active' :''}` }
                  key = {index} to={`#tab${index}`}
                  onClick ={()=>{setType(item.id)}}
                >
                <CardService 
                  img ={item.img}
                  description = {item.description}                
                />
                </Link>
                
              ))
            }
          </div>
          <div className="Service__content">
            {
              <ContentService 
                description ={ service[Index].description}
                data = {servicecontent[Index]}
              />
            }
            
          </div>
        </div>

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
    </>
  )
}

export default Home