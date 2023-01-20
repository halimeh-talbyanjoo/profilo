import { useState } from "react"
import "./works.scss"

const Works = () => {
  const [currentSlide, setCurrentSlide]=useState(0)
  const data=[
    {
      id:"1",
      icon:"assets/mobile.png",
      title:"Web Disign",
      dessc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
    },
    {
      id:"2",
      icon:"./assets/globe.png",
      title:"Mobile Application",
      dessc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      img:"https://developermedia.com/wp-content/uploads/2014/01/iStock_000019780418Small.jpg"
    },
    {
      id:"3",
      icon:"./assets/writing.png",
      title:"Branding",
      dessc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet",
      img:"https://cdn.bfldr.com/F97BMUF5/at/pw5kib-4f4ya8-c4rhl0/10-branding.png"
    },
  ]
  const HandelClick=(way)=>{
    way === "left" ? setCurrentSlide(currentSlide>0 ?currentSlide -1 : 2) 
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
  }
  return (
    <div className='works' id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) =>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.dessc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
            <img src={d.img} alt="" />
            </div>
          </div>
          
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>HandelClick("left")} />
      <img src="assets/nexticon.png" className="arrow right" alt="" onClick={()=>HandelClick("")} />
    </div>
  )
}

export default Works
