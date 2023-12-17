import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";


function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assests/gift.png" alt=""/>
          <span className="birthdayText">
            
           <b> Pola Foster </b> and <b> 3 other friends </b> hav a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="/assests/ad.png" alt=""/>
        <h4 className="rightbarTItle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}


        </ul>
      
      </>
    )
  }
  const ProfileRightbar=()=>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfovalue">New York</span>
        </div>
      </div>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From:</span>
          <span className="rightbarInfovalue">Marid</span>
        </div>
      </div>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship:</span>
          <span className="rightbarInfovalue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assests/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Kuldeep</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Kuldeep</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Kuldeep</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Kuldeep</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar