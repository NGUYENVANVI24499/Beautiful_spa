import React from 'react'



import SliderData from '../assets/fake_data/slider'
import service from '../assets/fake_data/service'
import Slider from '../conponents/Slider'
import CardService from '../conponents/CardService'
import Grid from '../conponents/Grid'
const Home = () => {
  return (
    <div>
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
              <CardService 
                key = {index}
                img ={item.img}
                description = {item.description}
              
              />
            ))
          }
        </div>
        
        <div className="Service__content">
          ádkhjsa
          {
              
          }
        </div>
        </div>
      
      </section>
        </div>
      {/* end DỊCH VỤ NỔI BẬT */}
    </div>
  )
}

export default Home