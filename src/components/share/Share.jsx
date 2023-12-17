import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material/';

function Share() {
  return (
    <div className="share">
       <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assests/person/1.jpeg" alt=""/>
            <input placeholder="what's in your mind khitiz ? " className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareoption">
                    <PermMedia  htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareoption">
                    <Label  htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareoption">
                    <Room  htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Locations</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotions  htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">share</button>
        </div>
       </div>
    </div>
  )
}

export default Share