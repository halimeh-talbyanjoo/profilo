import "./testimonials.scss"

const Testimonials = () => {
  const data=[
    {
      id:"1",
      icon:"./assets/Youtube.png",
      name:"Oliver Reinsve",
      title:"Backend developer",
      img:"https://futurecollars.com/storage/2021/04/frontend-600x400.jpg",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, cumque blanditiis."
    },
    {
      id:"2",
      name:"Diana Grytsku",
      icon:"./assets/linkedin.png",
      title:"Front-End Developer",
      img:"https://img.freepik.com/free-photo/professional-front-end-developer-female-monitoring-website-performance-laptop-while-working-distantly-international-student-girl-watching-web-seminar-while-resting-coffee-shop_231208-13531.jpg?w=2000",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, cumque blanditiis.",
      featured:true,
    },
    {
      id:"3",
      name:"George Fashnsve",
      icon:"./assets/Twitter.png",
      title:"CEO of Lama Company",
      img:"https://cdn.luxe.digital/media/2019/09/12090452/business-professional-dress-code-men-harvey-specter-suit-style-luxe-digital.jpg",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, cumque blanditiis."
    },
    
  ]
  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        
        {data.map((d)=>(
        <div className={d.featured ? "card featured": "card"}>
          <div className="top">
            <img src="./assets/rightt.png" className="left" alt="" />
            <img className="user" src={d.img} alt="" />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">
          {d.desc}
          </div>
          <div className="botton">
          <h3>{d.name} </h3>
          <h4> {d.title}</h4>

          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
