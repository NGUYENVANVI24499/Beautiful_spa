import React, { useState } from 'react'

import img1 from "../assets/images/tamtrang.jpg"
import img2 from "../assets/images/tamtrang1.jpg"
import img3 from "../assets/images/tamtrang2.jpg"
import img4 from "../assets/images/tamtrang3.jpg"

const lieutrinh = [
    {
        id: 0,
        name: "Tắm trắng",
        path: "tab12"

    },
    {
        id: 1,
        name: "triệt lông",
        path: "tab13"

    },
    {
        id: 2,
        name: "Điều trị thâm",
        path: "tab14"

    },
    {
        id: 3,
        name: "Giảm béo",
        path: "tab15"
    },
    {
        id: 4,
        name: "Điều trị nám",
        path: "tab16"
    }

]
const abc = [
    {
        id: 0,
        idbtn :0,
        img:img1,
        description:'Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :0,
        img:img2,
        description:'Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :0,
        img:img3,
        description:'Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :0,
        img:img4,
        description:'Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :1,
        img:img3,
        description:'Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
]
const BgRealistic = () => {
    
    const [btn, setBtn] = useState(0)
    const a =lieutrinh[btn].id
    const b =abc.filter(e=>e.idbtn ===a)
  
    
    console.log(b)
    console.log(btn)
  
 
  
  return (
    <div className="BgRealistic__container">
        <div className="BgRealistic__title">
            HÌNH ẢNH THỰC TẾ
        </div>
        <div className="BgRealistic__desp">
            Cảm nhận sự khác biệt khi đến với hệ thống làm đẹp hàng đầu SeoulSpa.vn.
        </div>
        <div className="BgRealistic__btn">
        {
            lieutrinh.map((item,index)=>(
            <div key={index}>
                <button  
                    onClick={()=>{
                        setBtn(item.id)
                    }}
                    className={`button ${item.id ===btn?'active':''}`}
                >{item.name}</button>
            </div>
            ))
        }
        </div>
        <div className="BgRealistic__cards">
        {
        b.map((item,index)=>(
            <div key={index} className="BgRealistic__card">
                <div className="BgRealistic__img">
                    <img src={item.img} alt="đây là hình ảnh" />
                </div>
                <div className="BgRealistic__content">
                    <div className="BgRealistic__button">
                        <button className='button active'>trước</button>
                        <button className='button active'>sau</button>
                    </div>
                    <div className="BgRealistic__description">
                    {
                        item.description
                    }
                        
                </div>
            </div>
        </div>
        ))
        }
            
        </div>
        <p>Xem thêm </p>
    </div>
  )
}

export default BgRealistic