import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username);
    const[like,setLike] = useState(post.like)
    const[isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />

                        <span className="postUsername">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" onClick={likeHandler} alt="" className="likeIcon" />
                        <img src="assets/heart.png"  onClick={likeHandler} alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
