import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css"
 import {MoreVert } from '@mui/icons-material/';

function Post({post}) {
//  const user = Users.filter(u=>u.id===1)
//  console.log(user[0].username)
const [like,setLike]=useState(post.like)
const [isliked,setIsLiked]=useState(false)

 const likeHandler=()=>{
  setLike(isliked ? like-1 : like+1)
  setIsLiked(!isliked)
 }
  return (

    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" 
                 src={Users.filter((u)=>u.id=== post?.userId)[0].profilePicture} alt=""/>
                
                <span className="postUserName">
                  {Users.filter((u)=>u.id=== post?.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
            <MoreVert/>
            </div>

        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img  className = "postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assests/like.png" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="/assests/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
                
            </div>

        </div>

      </div>
    </div>
  )
}

export default Post