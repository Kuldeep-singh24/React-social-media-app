import "./sidebar.css"
import {RssFeed,Chat,PlayCircleFilled,Groups,Bookmarks,HelpOutline,WorkOutline,Event,School } from '@mui/icons-material/';
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";


function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarlist">
            <li className="sidebarlistItem">
                 <RssFeed className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Feed</span>
                </li>
            <li className="sidebarlistItem">
                 <Chat className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Chats</span>
                </li>
            <li className="sidebarlistItem">
                 <PlayCircleFilled className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Videos</span>
                </li>
                <li className="sidebarlistItem">
                 <Groups className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Groups</span>
                </li>
                <li className="sidebarlistItem">
                 <Bookmarks className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Bookmarks</span>
                </li>
                <li className="sidebarlistItem">
                 <HelpOutline className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Questions</span>
                </li>
                <li className="sidebarlistItem">
                 <WorkOutline className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Jobs</span>
                </li>
                <li className="sidebarlistItem">
                 <Event className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Events</span>
                </li>
                <li className="sidebarlistItem">
                 <School className="sidebarIcon"/>
                 <span className="sidebarlistItemText">Course</span>
                </li>
            </ul>
            <ul>
              <button className="sidebarButton">Show More</button>
              <hr className="sidebarHr"/>
              <ul className="sidebarFriendList">
                 {Users.map(u=>(
                  <CloseFriend key={u.id} user={u}/>
                 ))}
              </ul>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar