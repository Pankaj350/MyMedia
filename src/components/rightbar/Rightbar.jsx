import "./rightbar.css";
import { Users, } from "../../dummyData";
import Online from "../online/Online"; 

export default function Rightbar({profile}) {

 const HomeRightbar = () => {
  return(
    <>
         <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Aatif ansari</b> and <b>3 other Friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online  friends</h4>
        <ul className="rightbarFriendList">
         {Users.map((u)=>(
          <Online key={u.id} user={u} />
         ))}

        </ul>
    </>
  )
 }


 const ProfileRightbar =() => {
  return (
    <>
     <h4 className="rightbarTitle">User information</h4>
     <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">city:</span>
        <span className="rightbarInfoValue">India</span>

      </div>
     </div>
    </>
  )
 }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <ProfileRightbar />
      </div>
    </div>
  )
}
