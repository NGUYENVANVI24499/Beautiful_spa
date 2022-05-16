import React from 'react'
import img1 from "../assets/images/product1.jpg"
import img2 from "../assets/images/slide1.jpg"
const Product = () => {
  return (
    <>
    <div className="Product__container">
      <div className="Product__title"> SẢN PHẨM NỔI BẬT</div>
      <div className="Product__cards">
        <div className="Product__card">
          <div className= "Product__card--image"><img src={img1} alt="Product" /></div>
          <div className="Product__card--content">
            <div className="Product__card--name">THIẾT BỊ SPA</div>
            <div className="Product__card--describe">Mặt Nạ Ánh Sáng Sinh Học 7 Màu S-Life SpaFace</div>
            <div className="Product__card--price">
              <p className='km'>850.000₫</p>
              <p className='k'>1.750.000₫</p>
            </div>
            <div className="Product__card--shopping">
              <ion-icon name="cart-outline"></ion-icon>
              <button className='active'>thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>

        <div className="Product__card">
          <div className= "Product__card--image"><img src={img2} alt="Product" /></div>
          <div className="Product__card--content">
            <div className="Product__card--name">THIẾT BỊ SPA</div>
            <div className="Product__card--describe">Mặt Nạ Ánh Sáng Sinh Học 7 Màu S-Life SpaFace</div>
            <div className="Product__card--price">
              <p className='km'>850.000₫</p>
              <p className='k'>1.750.000₫</p>
            </div>
            <div className="Product__card--shopping">
              <ion-icon name="cart-outline"></ion-icon>
              <button className='btn'>thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Product