import React from 'react'
import "./features.scss"

const Features = (props) => {

  const arrr1 =[
    {img:"/assets/hotel.png",title:"Search your dream hotel",subtitle:"Book and pay for your stay in five star hotels around world."},
    {img:"/assets/recommended2.png",title:"Find the top rated",subtitle:"View visitor reviews and ratings."},
    {img:"/assets/highclass.png",title:"See high class hotel",subtitle:"Book and pay for your stay in five star hotels around world."},
    
];
  return(
  <div className="features">
    <div className="container">
    {arrr1.map((item,index) => (
    <div key={index}>
        <img src={item.img} alt="pic"></img>
        <h5>{item.title}</h5>
        <p>{item.subtitle}</p>
    </div>))}
    </div>
  </div>
  )
}

export default Features
