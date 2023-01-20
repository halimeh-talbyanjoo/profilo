import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MarkunreadIcon from '@mui/icons-material/Markunread';
function Topbar({menuOpen,setMenuOpen}){
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>
              09174585889
            </span>
          </div>
          <div className="itemContainer">
            <MarkunreadIcon className="icon"/>
            <span>
              parasto13662013@gmail.com
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen) }>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
