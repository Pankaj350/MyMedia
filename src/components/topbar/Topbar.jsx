import './topbar.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MyMedia</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="text" placeholder="Search fo friend ,post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarBadge">20</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarBadge">12</span>
          </div>
        </div>
        <img src="/assets/person/p1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
