import { useEffect, useState } from "react"
import { featuredPortfolio
  ,webPortfolio
,mobilePortfolio,designPortfolio,contectPortfolio } from "../../data"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

const Portfolio = () => {
  const [selected,setSelected]=useState("fearured")
  const [data,setData]=useState([])
  const list=[
    {
      id:"fearured",
      title:"Fearured"
    },
    {
      id:"web",
      title:"Web App"
    },
    {
      id:"mobile",
      title:"Mobile App"
    },
    {
      id:"design",
      title:"Design"
    },
    {
      id:"contect",
      title:"Content"
    },
  ]
  useEffect(()=>{
    switch(selected){
      case "fearured":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
        break
      case "mobile":
        setData(mobilePortfolio)
        break
      case "design":
        setData(designPortfolio)
        break
      case "contect":
        setData(contectPortfolio)
        break
    }
  },[selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map((item)=>(
        <PortfolioList 
        id={item.id}
        active={selected === item.id}  
        title={item.title}
        setSelected={setSelected}/>
       ))}
      </ul>
      <div className="continer">
        {data.map(d=>(
            <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        )

        )}
        
        
      </div>
    </div>
  )
}

export default Portfolio
